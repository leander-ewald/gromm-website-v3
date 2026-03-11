import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: `${company.name} — ${company.claim}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "Verbissschutz",
    "Fegeschutz",
    "Forstwirtschaft",
    "Wildschutz",
    "GroMM",
    "VS1200S2",
    "VS1700S2",
    "Einzelschützer",
    "Pflanzenschutz",
    "Nachhaltigkeit",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: company.name,
    title: `${company.name} — ${company.claim}`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
