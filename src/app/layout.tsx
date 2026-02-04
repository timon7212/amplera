import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "Amplera — Premium In-App Advertising Network",
    template: "%s | Amplera",
  },
  description: "Scale your mobile app with Amplera's premium in-app advertising network. 214+ SDK publishers, 2.8B+ daily impressions, advanced targeting. For advertisers and publishers.",
  keywords: [
    "ad network",
    "in-app advertising",
    "mobile advertising",
    "SDK integration",
    "app monetization",
    "mobile ads",
    "programmatic advertising",
    "user acquisition",
    "mobile marketing",
    "app publishers",
    "ad mediation",
    "rewarded ads",
    "interstitial ads",
    "banner ads",
    "native ads",
  ],
  authors: [{ name: "Amplera", url: "https://amplera.io" }],
  creator: "Amplera",
  publisher: "Amplera",
  
  // Favicon & Icons
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amplera.io",
    siteName: "Amplera",
    title: "Amplera — Premium In-App Advertising Network",
    description: "Scale your mobile app with Amplera's premium in-app advertising network. 214+ publishers, advanced targeting, real-time analytics.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amplera - In-App Advertising Network",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Amplera — Premium In-App Advertising Network",
    description: "Scale your mobile app with Amplera's premium in-app advertising network. 214+ publishers, advanced targeting.",
    images: ["/og-image.png"],
    creator: "@amplera",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  category: "technology",
  classification: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Inter Font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://amplera.io" />
      </head>
      <body className="antialiased bg-white text-[#1a1a1a]">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
