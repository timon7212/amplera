"use client";

import Link from "next/link";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066ff] to-[#00c853] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a1a]">
                Amplera
              </span>
            </Link>
            <p className="text-[14px] text-[#718096] leading-relaxed max-w-[280px] mb-4">
              Premium in-app advertising network connecting advertisers with 214+ quality publishers worldwide.
            </p>
            <a href="mailto:hello@amplera.io" className="text-[14px] text-[#0066ff] hover:underline">
              hello@amplera.io
            </a>
          </div>

          {/* For Advertisers */}
          <div>
            <h4 className="text-[13px] font-semibold text-[#1a1a1a] uppercase tracking-wider mb-4">For Advertisers</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("advertisers")} className="text-[14px] text-[#718096] hover:text-[#1a1a1a] transition-colors">
                  User Acquisition
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="text-[14px] text-[#718096] hover:text-[#1a1a1a] transition-colors">
                  Ad Formats
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="text-[14px] text-[#718096] hover:text-[#1a1a1a] transition-colors">
                  Analytics
                </button>
              </li>
            </ul>
          </div>

          {/* For Publishers */}
          <div>
            <h4 className="text-[13px] font-semibold text-[#1a1a1a] uppercase tracking-wider mb-4">For Publishers</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("publishers")} className="text-[14px] text-[#718096] hover:text-[#1a1a1a] transition-colors">
                  Monetization
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("sdk")} className="text-[14px] text-[#718096] hover:text-[#1a1a1a] transition-colors">
                  SDK Integration
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-[14px] text-[#718096] hover:text-[#1a1a1a] transition-colors">
                  About Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-[13px] text-[#a0aec0] text-center">
            © {new Date().getFullYear()} Amplera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
