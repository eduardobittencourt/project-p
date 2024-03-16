import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quando o Theo vem?",
  description: "Criado por Eduardo Bittencourt",
};

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-calligraphy",
});

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br" className={caveat.className}>
      <body className="container mx-auto px-8 py-8">{children}</body>
    </html>
  );
}
