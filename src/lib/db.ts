import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

// Use a fixed path for production, project-relative for development
const getDbPath = () => {
  // In production on VPS, use /var/www/amplera/data/
  if (process.env.NODE_ENV === "production") {
    const prodPath = "/var/www/amplera/data";
    if (!fs.existsSync(prodPath)) {
      fs.mkdirSync(prodPath, { recursive: true });
    }
    return path.join(prodPath, "amplera.db");
  }
  // In development, use project directory
  const devPath = path.join(process.cwd(), "data");
  if (!fs.existsSync(devPath)) {
    fs.mkdirSync(devPath, { recursive: true });
  }
  return path.join(devPath, "amplera.db");
};

const dbPath = getDbPath();

const db = new Database(dbPath);

// Leads table
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    app_name TEXT,
    budget TEXT,
    mau TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'new'
  )
`);

// Lead types
export interface Lead {
  id: number;
  type: "publisher" | "advertiser";
  name: string;
  email: string;
  company: string | null;
  app_name: string | null;
  budget: string | null;
  mau: string | null;
  created_at: string;
  status: "new" | "contacted" | "qualified" | "closed";
}

export function getAllLeads(): Lead[] {
  const stmt = db.prepare("SELECT * FROM leads ORDER BY created_at DESC");
  return stmt.all() as Lead[];
}

export function getLeadById(id: number): Lead | undefined {
  const stmt = db.prepare("SELECT * FROM leads WHERE id = ?");
  return stmt.get(id) as Lead | undefined;
}

export function createLead(lead: Omit<Lead, "id" | "created_at" | "status">): Lead {
  const stmt = db.prepare(`
    INSERT INTO leads (type, name, email, company, app_name, budget, mau)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const result = stmt.run(
    lead.type,
    lead.name,
    lead.email,
    lead.company || null,
    lead.app_name || null,
    lead.budget || null,
    lead.mau || null
  );
  return getLeadById(result.lastInsertRowid as number)!;
}

export function updateLeadStatus(id: number, status: Lead["status"]): Lead | undefined {
  const stmt = db.prepare("UPDATE leads SET status = ? WHERE id = ?");
  stmt.run(status, id);
  return getLeadById(id);
}

export function deleteLead(id: number): boolean {
  const stmt = db.prepare("DELETE FROM leads WHERE id = ?");
  const result = stmt.run(id);
  return result.changes > 0;
}

export default db;
