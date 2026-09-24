import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SiteProviders } from "@/components/SiteProviders";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rita's Kitchen | Fine Dining",
  description: "A cinematic Benin-inspired dining experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteProviders><Navbar />{children}<Footer /></SiteProviders></body></html>;
}
