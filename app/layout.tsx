import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_BASE_URL || "http://localhost:3000"),
  title: "HashTee — Hashtag-only merch",
  description: "Tees, mugs, bags, and hats auto-created from trending hashtags.",
  openGraph: {
    title: "HashTee — Hashtag-only merch",
    description: "Tees, mugs, bags, and hats auto-created from trending hashtags.",
    url: process.env.APP_BASE_URL || "http://localhost:3000",
    images: ["/og-card.svg"]
  },
  other: { "theme-color": "#FF4F7D" }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
