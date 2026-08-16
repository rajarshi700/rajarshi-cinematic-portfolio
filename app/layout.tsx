import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajarshi | Full Stack Developer",
  description:
    "Full Stack Developer building modern web applications, scalable platforms and AI-powered experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
