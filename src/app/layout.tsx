import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ weight: ["500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Coming Soon",
  description: "E-commerce Coming Soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-yellow`}>{children}</body>
    </html>
  );
}
