"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ContactModal } from "@/components/ui/contact-modal";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactType, setContactType] = useState<"advertiser" | "publisher">("advertiser");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openContactModal = (type: "advertiser" | "publisher") => {
    setContactType(type);
    setContactModalOpen(true);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066ff] to-[#00c853] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-[20px] font-semibold tracking-[-0.02em] text-[#1a1a1a]">
              Amplera
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-[15px] text-[#4a5568] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("advertisers")}
              className="text-[15px] text-[#4a5568] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              Advertisers
            </button>
            <button 
              onClick={() => scrollToSection("publishers")}
              className="text-[15px] text-[#4a5568] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              Publishers
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-[15px] text-[#4a5568] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              About
            </button>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => openContactModal("advertiser")}
              className="hidden md:flex px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#333] text-white font-medium rounded-full text-[14px] transition-all hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <nav className="px-6 py-6 space-y-1">
                <button
                  onClick={() => scrollToSection("features")}
                  className="block w-full text-left px-4 py-3 rounded-xl text-[#4a5568] hover:bg-gray-50 hover:text-[#1a1a1a] font-medium transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("advertisers")}
                  className="block w-full text-left px-4 py-3 rounded-xl text-[#4a5568] hover:bg-gray-50 hover:text-[#1a1a1a] font-medium transition-colors"
                >
                  Advertisers
                </button>
                <button
                  onClick={() => scrollToSection("publishers")}
                  className="block w-full text-left px-4 py-3 rounded-xl text-[#4a5568] hover:bg-gray-50 hover:text-[#1a1a1a] font-medium transition-colors"
                >
                  Publishers
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-4 py-3 rounded-xl text-[#4a5568] hover:bg-gray-50 hover:text-[#1a1a1a] font-medium transition-colors"
                >
                  About
                </button>
                
                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => openContactModal("advertiser")}
                    className="w-full py-3 bg-[#1a1a1a] text-white font-medium rounded-full text-[14px]"
                  >
                    I'm an Advertiser
                  </button>
                  <button
                    onClick={() => openContactModal("publisher")}
                    className="w-full py-3 bg-white border border-gray-200 text-[#1a1a1a] font-medium rounded-full text-[14px]"
                  >
                    I'm a Publisher
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
        type={contactType}
      />
    </>
  );
}
