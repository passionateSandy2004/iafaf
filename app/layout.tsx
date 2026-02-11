import type { Metadata } from "next";
import { Cinzel, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsRibbon from "./components/NewsRibbon";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "IAFAF - Investor Awareness & Fraud Awareness Federation",
  description: "A National Single-Window Platform for Investor Protection, Fraud Awareness and Grievance Facilitation",
  icons: {
    icon: '/iafaf-logo.png',
    shortcut: '/iafaf-logo.png',
    apple: '/iafaf-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${cinzel.variable} ${geistMono.variable} ${lato.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Header />
        <NewsRibbon />
        <main className="flex-grow" style={{ margin: 0, padding: 0 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
