import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Arda Gürhan Hukuki Danışmanlık",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <div className="fixed bottom-6 right-6 z-50">
          <FaWhatsapp
            size={56}
            className="bg-primary text-green-500 p-2 rounded-full animate-pulse hover:scale-110 transition-transform"
          />
        </div>
      </body>
    </html>
  );
}
