import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Cinzel, Hina_Mincho, Oooh_Baby } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bolão chegada do Theo",
  description: "Criado por Eduardo Bittencourt",
};

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: "400",
});

const hinaMincho = Hina_Mincho({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: "400",
});

const oohBaby = Oooh_Baby({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-calligraphy",
  weight: "400",
});

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-br"
      className={`${oohBaby.variable} ${cinzel.variable} ${hinaMincho.variable}`}
    >
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
