"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type ContactType = "advertiser" | "publisher";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ContactType;
}

const modalConfig: Record<ContactType, {
  title: string;
  subtitle: string;
  color: string;
  icon: React.ReactNode;
  fields: Array<{
    name: string;
    label: string;
    type: string;
    placeholder: string;
    required?: boolean;
  }>;
}> = {
  advertiser: {
    title: "Start Advertising",
    subtitle: "Get access to 214+ premium publishers",
    color: "#0066ff",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    fields: [
      { name: "name", label: "Your name", type: "text", placeholder: "John Smith", required: true },
      { name: "email", label: "Work email", type: "email", placeholder: "john@company.com", required: true },
      { name: "company", label: "Company name", type: "text", placeholder: "Company Inc." },
      { name: "budget", label: "Monthly ad budget", type: "text", placeholder: "$10K, $50K, $100K+" },
    ],
  },
  publisher: {
    title: "Become a Publisher",
    subtitle: "Monetize your app with premium ads",
    color: "#00c853",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    fields: [
      { name: "name", label: "Your name", type: "text", placeholder: "John Smith", required: true },
      { name: "email", label: "Work email", type: "email", placeholder: "john@company.com", required: true },
      { name: "app_name", label: "App name", type: "text", placeholder: "My Awesome App" },
      { name: "mau", label: "Monthly active users", type: "text", placeholder: "100K, 500K, 1M+" },
    ],
  },
};

export function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
  const config = modalConfig[type];
  const [form, setForm] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Reset form when modal opens/closes or type changes
  useEffect(() => {
    if (isOpen) {
      setForm({});
      setSent(false);
      setError("");
    }
  }, [isOpen, type]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...form }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSent(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[420px] pointer-events-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div 
                  className="px-6 py-5 flex items-center justify-between"
                  style={{ background: `linear-gradient(135deg, ${config.color}15, ${config.color}05)` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: config.color, color: "white" }}
                    >
                      {config.icon}
                    </div>
                    <div>
                      <h2 className="text-[18px] font-semibold text-[#1a1a1a]">
                        {config.title}
                      </h2>
                      <p className="text-[13px] text-[#718096]">{config.subtitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="px-6 py-5">
                  {sent ? (
                    <div className="text-center py-6">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: `${config.color}15` }}
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={config.color} strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <h3 className="text-[18px] font-semibold text-[#1a1a1a] mb-1">Thank you!</h3>
                      <p className="text-[14px] text-[#718096]">We&apos;ll get back to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {config.fields.map((field) => (
                        <div key={field.name}>
                          <label className="block text-[13px] font-medium text-[#4a5568] mb-1.5">
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </label>
                          <input
                            type={field.type}
                            required={field.required}
                            value={form[field.name] || ""}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-gray-200 rounded-xl text-[#1a1a1a] text-[14px] focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder:text-[#a0aec0]"
                            style={{ "--tw-ring-color": `${config.color}30` } as React.CSSProperties}
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}

                      {error && (
                        <p className="text-[13px] text-red-500 text-center bg-red-50 py-2 rounded-lg">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full py-3 text-white font-semibold rounded-xl text-[15px] transition-all disabled:opacity-50 hover:opacity-90"
                        style={{ backgroundColor: config.color }}
                      >
                        {sending ? "Submitting..." : "Submit"}
                      </button>

                      <p className="text-[12px] text-[#a0aec0] text-center">
                        Or email us at{" "}
                        <a href="mailto:hello@amplera.io" className="text-[#0066ff] hover:underline">
                          hello@amplera.io
                        </a>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
