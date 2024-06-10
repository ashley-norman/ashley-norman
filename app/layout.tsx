import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Ashley Norman",
  description: "Ashley Norman's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-100 ${montserrat.className}`}>{children}</body>
    </html>
  );
}
