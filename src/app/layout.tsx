import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

import "./globals.css";
import "./css/style.css";
import MainLayout from "./mainLayout";

export const metadata: Metadata = {
  title: (process.env.NODE_ENV === "development" ? "[dev]" : "") + "Kammerchor anima nordica Dresden",
  description:
    "anima nordica - gemischter Kammerchor für nordische Musik in Dresden Blasewitz. Wir singen vornehmlich A-cappella-Kompositionen aus Skandinavien (Schweden, Norwegen, Dänemark, Finnland, Island, Färöer) und dem Baltikum (Estland, Lettland und Litauen). Der Kammerchor anima nordica Dresden wird geleitet von Stephan Schönfeld.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} bg-gray-50 font-montserrat) tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <MainLayout>{children}</MainLayout>
        </div>
      </body>
    </html>
  );
}
