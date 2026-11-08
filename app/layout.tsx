import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollMotion } from "@/components/ScrollMotion";
import { StructuredData } from "@/components/StructuredData";
import { organizationSchema, websiteSchema } from "@/lib/structuredData";
import { siteConfig } from "@/lib/siteConfig";

const manrope = Manrope({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "optional",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Kraamzorg ’t Gouden Wiegje | Persoonlijke zorg door Vania",
    template: "%s",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Vania Dos Santos" }],
  creator: "Kraamzorg ’t Gouden Wiegje",
  publisher: "Kraamzorg ’t Gouden Wiegje",
  formatDetection: { telephone: false },
  icons: { icon: "/images/icon.png", apple: "/images/icon.png" },
  verification: { google: "ujCIT7id6TJZwmhTRj5d8tpUJnkZ0gm9KZJKRyRsLPs" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#385B50",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Direct naar inhoud</a>
        <StructuredData data={{ "@context": "https://schema.org", "@graph": [organizationSchema, websiteSchema] }} />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingButtons />
        <CookieConsent />
        <ScrollMotion />
      </body>
    </html>
  );
}
