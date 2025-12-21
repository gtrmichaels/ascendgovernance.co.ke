import type { Metadata } from "next";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ascend Governance - Corporate Governance Excellence",
  description: "Professional corporate governance consultancy providing expert guidance on board composition, compliance, and organizational leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
