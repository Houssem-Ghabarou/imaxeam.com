import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared-components/header";
import Footer from "@/components/shared-components/footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - iMaxeam.com",
  description:
    "IBM Maximo is Our Game Elevate your Maximo experience with iMaxeam's innovative solutions, designed to empower clients globally.",
  alternates: {
    canonical: "https://imaxeam.com/projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <Header />

        <main className="w-full min-h-[calc(100vh-150px)] flex flex-col">
          {children}
        </main>

        {/* Footer */}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
