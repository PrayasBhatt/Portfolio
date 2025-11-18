import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prayas Bhatt | Portfolio",
  description: "Welcome to my portfolio website showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 relative`}>

        <ParticleBackground />

        <div className="relative z-10 min-h-screen">
          {children}
        </div>

      </body>
    </html>
  );
}
