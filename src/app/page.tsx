"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactModal } from "@/components/ui/contact-modal";

/* ═══════════════════════════════════════════════════════════════════════════
   HERO SECTION — Clean, Apple-style hero
═══════════════════════════════════════════════════════════════════════════ */
function Hero({ onCtaClick }: { onCtaClick: (type: "advertiser" | "publisher") => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0066ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00c853]/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div style={{ opacity, y }} className="relative z-10 text-center px-6 max-w-[900px] pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00c853] animate-pulse" />
            <span className="text-[13px] text-[#4a5568] font-medium">Trusted by 214+ Publishers Worldwide</span>
          </div>

          <h1 className="text-[44px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-bold tracking-[-0.03em] leading-[1.05] text-[#1a1a1a] mb-6">
            Premium In-App
            <br />
            <span className="bg-gradient-to-r from-[#0066ff] to-[#00c853] bg-clip-text text-transparent">
              Advertising Network
            </span>
          </h1>

          <p className="text-[17px] md:text-[19px] text-[#4a5568] max-w-[600px] mx-auto leading-[1.7] mb-10">
            Connect with quality users through our network of 214+ premium SDK publishers. 
            Advanced targeting, real-time analytics, and dedicated support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={() => onCtaClick("advertiser")}
              className="px-8 py-4 bg-[#1a1a1a] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#333] hover:shadow-xl hover:scale-[1.02]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Advertising
            </motion.button>
            <motion.button
              onClick={() => onCtaClick("publisher")}
              className="px-8 py-4 border border-gray-300 text-[#1a1a1a] font-semibold text-[15px] rounded-full transition-all hover:border-[#1a1a1a] hover:bg-gray-50"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Become a Publisher
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   FEATURES SECTION — Platform capabilities
═══════════════════════════════════════════════════════════════════════════ */
function Features() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Advanced Targeting",
      desc: "Reach the right users with precision targeting by demographics, interests, behavior, and device type.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      title: "Multiple Ad Formats",
      desc: "Banners, interstitials, rewarded video, native ads — all formats to maximize engagement and revenue.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
      title: "Real-time Analytics",
      desc: "Track performance in real-time with detailed reports on impressions, clicks, conversions, and revenue.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Fraud Protection",
      desc: "Advanced fraud detection systems protect your budget from invalid traffic and ensure quality impressions.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Global Reach",
      desc: "Access users in 180+ countries through our diverse network of premium mobile app publishers.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Dedicated Support",
      desc: "Get personalized support from our team of mobile advertising experts available 24/7.",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e6f0ff] text-[#0066ff] text-[13px] font-medium mb-4">
            Platform Features
          </div>
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-[-0.03em] leading-[1.1] text-[#1a1a1a] mb-4">
            Everything you need
            <br />
            <span className="text-[#718096]">to scale your app</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 md:p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#f8f9fa] flex items-center justify-center text-[#0066ff] mb-5 group-hover:bg-[#e6f0ff] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-[#1a1a1a] tracking-[-0.01em] mb-2">{feature.title}</h3>
              <p className="text-[14px] text-[#718096] leading-[1.7]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FOR ADVERTISERS SECTION
═══════════════════════════════════════════════════════════════════════════ */
function ForAdvertisers({ onCtaClick }: { onCtaClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    "Access to 214+ premium SDK publishers",
    "Advanced audience targeting capabilities",
    "Real-time campaign optimization",
    "Transparent pricing with no hidden fees",
    "Dedicated account manager",
    "Full MMP integration support",
  ];

  return (
    <section id="advertisers" ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-[#fafafa] to-white scroll-mt-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066ff]/10 text-[#0066ff] text-[13px] font-medium mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              For Advertisers
            </div>
            <h2 className="text-[36px] sm:text-[44px] font-bold tracking-[-0.03em] leading-[1.15] text-[#1a1a1a] mb-5">
              Acquire quality users
              <br />
              at scale
            </h2>
            <p className="text-[16px] text-[#4a5568] leading-[1.7] mb-8">
              Reach your target audience across our network of premium mobile apps. 
              Our advanced targeting and optimization technology ensures you get the best ROI on your ad spend.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#00c853]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-[15px] text-[#4a5568]">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              onClick={onCtaClick}
              className="px-8 py-4 bg-[#0066ff] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#0052cc] hover:shadow-lg"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Campaign →
            </motion.button>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 relative overflow-hidden">
              {/* Mock dashboard */}
              <div className="mb-6">
                <div className="text-[12px] text-[#a0aec0] uppercase tracking-wider mb-1">Campaign Performance</div>
                <div className="text-[32px] font-bold text-[#1a1a1a]">$124,567</div>
                <div className="text-[14px] text-[#00c853] font-medium">+23.5% vs last month</div>
              </div>
              
              {/* Mock chart */}
              <div className="h-[180px] bg-gradient-to-t from-[#0066ff]/5 to-transparent rounded-xl flex items-end justify-between px-4 pb-4">
                {[40, 65, 45, 80, 60, 90, 75, 95, 85, 100, 88, 92].map((height, i) => (
                  <div
                    key={i}
                    className="w-[6%] bg-gradient-to-t from-[#0066ff] to-[#00c853] rounded-t-sm"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                <div>
                  <div className="text-[11px] text-[#a0aec0] uppercase tracking-wider">Impressions</div>
                  <div className="text-[18px] font-bold text-[#1a1a1a]">48.2M</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#a0aec0] uppercase tracking-wider">Clicks</div>
                  <div className="text-[18px] font-bold text-[#1a1a1a]">1.2M</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#a0aec0] uppercase tracking-wider">Installs</div>
                  <div className="text-[18px] font-bold text-[#1a1a1a]">89.4K</div>
                </div>
              </div>
            </div>
            
            {/* Decorative gradient */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#0066ff]/10 to-[#00c853]/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FOR PUBLISHERS SECTION
═══════════════════════════════════════════════════════════════════════════ */
function ForPublishers({ onCtaClick }: { onCtaClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    "Highest eCPM rates in the industry",
    "Multiple ad format support",
    "Easy SDK integration (< 30 min)",
    "100% fill rate guarantee",
    "Weekly payouts via wire/PayPal",
    "Real-time revenue dashboard",
  ];

  return (
    <section id="publishers" ref={ref} className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-[#1a1a1a] rounded-3xl shadow-2xl p-8 relative overflow-hidden">
              {/* Mock revenue dashboard */}
              <div className="mb-6">
                <div className="text-[12px] text-[#718096] uppercase tracking-wider mb-1">Today&apos;s Revenue</div>
                <div className="text-[36px] font-bold text-white">$8,432</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[14px] text-[#00c853] font-medium">↑ 18.2%</span>
                  <span className="text-[12px] text-[#718096]">vs yesterday</span>
                </div>
              </div>
              
              {/* eCPM by format */}
              <div className="space-y-3">
                {[
                  { format: "Rewarded Video", ecpm: "$42.50", fill: 100 },
                  { format: "Interstitial", ecpm: "$28.30", fill: 100 },
                  { format: "Banner", ecpm: "$12.80", fill: 100 },
                  { format: "Native", ecpm: "$18.90", fill: 98 },
                ].map((item) => (
                  <div key={item.format} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                    <span className="text-[14px] text-white">{item.format}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-[14px] font-semibold text-[#00c853]">{item.ecpm}</span>
                      <span className="text-[12px] text-[#718096]">{item.fill}% fill</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#00c853]" />
              <div className="absolute top-4 right-10 w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="absolute top-4 right-16 w-3 h-3 rounded-full bg-[#ef4444]" />
            </div>
            
            {/* Decorative gradient */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#00c853]/10 to-[#0066ff]/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00c853]/10 text-[#00c853] text-[13px] font-medium mb-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <path d="M12 8v8M8 12h8" />
              </svg>
              For Publishers
            </div>
            <h2 className="text-[36px] sm:text-[44px] font-bold tracking-[-0.03em] leading-[1.15] text-[#1a1a1a] mb-5">
              Maximize your
              <br />
              app revenue
            </h2>
            <p className="text-[16px] text-[#4a5568] leading-[1.7] mb-8">
              Join 214+ publishers who trust Amplera for monetization. 
              Our SDK delivers the highest eCPMs with 100% fill rate and premium demand from top advertisers.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0066ff]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-[15px] text-[#4a5568]">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              onClick={onCtaClick}
              className="px-8 py-4 bg-[#00c853] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#00a844] hover:shadow-lg"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Integrate SDK →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SDK INTEGRATION SECTION
═══════════════════════════════════════════════════════════════════════════ */
function SdkIntegration() {
  return (
    <section id="sdk" className="py-24 md:py-32 bg-[#fafafa] scroll-mt-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#4a5568] text-[13px] font-medium mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
            Easy Integration
          </div>
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-[-0.03em] leading-[1.1] text-[#1a1a1a] mb-4">
            Integrate in minutes,
            <br />
            <span className="text-[#718096]">not days</span>
          </h2>
          <p className="text-[16px] text-[#4a5568] max-w-[500px] mx-auto">
            Our lightweight SDK integrates seamlessly with iOS and Android apps. 
            Start monetizing in less than 30 minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* iOS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <span className="text-[15px] font-semibold text-[#1a1a1a]">iOS (Swift)</span>
            </div>
            <div className="p-6 bg-[#1a1a1a] font-mono text-[13px] text-white overflow-x-auto">
              <pre className="leading-relaxed">
{`// Podfile
pod 'AmpleraSDK', '~> 2.0'

// AppDelegate.swift
import AmpleraSDK

func application(_ application: UIApplication,
  didFinishLaunchingWithOptions...) {
    Amplera.initialize(appKey: "YOUR_APP_KEY")
    return true
}`}
              </pre>
            </div>
          </motion.div>

          {/* Android */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#3ddc84] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-1.4-.59-2.94-.92-4.47-.92s-3.07.33-4.47.92L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
                </svg>
              </div>
              <span className="text-[15px] font-semibold text-[#1a1a1a]">Android (Kotlin)</span>
            </div>
            <div className="p-6 bg-[#1a1a1a] font-mono text-[13px] text-white overflow-x-auto">
              <pre className="leading-relaxed">
{`// build.gradle
implementation 'io.amplera:sdk:2.0.0'

// Application.kt
import io.amplera.sdk.Amplera

class MyApp : Application() {
    override fun onCreate() {
        super.onCreate()
        Amplera.initialize(this, "YOUR_APP_KEY")
    }
}`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ABOUT / TEAM SECTION
═══════════════════════════════════════════════════════════════════════════ */
function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f9fa] text-[#4a5568] text-[13px] font-medium mb-4">
            About Amplera
          </div>
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-[-0.03em] leading-[1.1] text-[#1a1a1a] mb-6">
            Built by mobile
            <br />
            <span className="text-[#718096]">advertising experts</span>
          </h2>
          <p className="text-[17px] text-[#4a5568] leading-[1.8] mb-10 max-w-[700px] mx-auto">
            Amplera was founded by a team of mobile advertising veterans with decades of combined experience 
            at leading ad networks and mobile gaming companies. We built the platform we always wished existed — 
            transparent, performant, and focused on long-term partnerships.
          </p>

        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CTA SECTION
═══════════════════════════════════════════════════════════════════════════ */
function Cta({ onCtaClick }: { onCtaClick: (type: "advertiser" | "publisher") => void }) {
  return (
    <section className="py-24 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/20 via-transparent to-[#00c853]/20 pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold tracking-[-0.03em] leading-[1.1] mb-5">
            <span className="bg-gradient-to-r from-white via-[#a0d8ff] to-[#7affa0] bg-clip-text text-transparent">
              Let&apos;s Partner Up
            </span>
          </h2>
          <p className="text-[17px] text-[#a0aec0] max-w-[500px] mx-auto mb-10">
            Join 214+ publishers and thousands of advertisers who trust Amplera for their mobile advertising needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={() => onCtaClick("advertiser")}
              className="px-8 py-4 bg-white text-[#1a1a1a] font-semibold text-[15px] rounded-full transition-all hover:shadow-xl"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              I&apos;m an Advertiser
            </motion.button>
            <motion.button
              onClick={() => onCtaClick("publisher")}
              className="px-8 py-4 border border-white/30 text-white font-semibold text-[15px] rounded-full transition-all hover:bg-white/10"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              I&apos;m a Publisher
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"advertiser" | "publisher">("advertiser");

  const openModal = (type: "advertiser" | "publisher") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <main className="bg-white min-h-screen text-[#1a1a1a] antialiased">
      <Header />

      <Hero onCtaClick={openModal} />
      <Features />
      <ForAdvertisers onCtaClick={() => openModal("advertiser")} />
      <ForPublishers onCtaClick={() => openModal("publisher")} />
      <SdkIntegration />
      <About />
      <Cta onCtaClick={openModal} />

      <Footer />

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} />
    </main>
  );
}
