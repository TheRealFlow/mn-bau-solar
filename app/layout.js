import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MN-Bau & Solar",
  description:
    "MN-Bau & Solar - Ihr Partner für Photovoltaik und Solaranlagen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <CookieBanner />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
