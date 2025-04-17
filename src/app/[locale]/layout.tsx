import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared-components/header";
import Footer from "@/components/shared-components/footer";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { MoonLoader } from "react-spinners";
import "keen-slider/keen-slider.min.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../../i18n/routing";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Home - iMaxeam.com",
  description:
    "IBM Maximo is Our Game Elevate your Maximo experience with iMaxeam's innovative solutions, designed to empower clients globally.",
  alternates: {
    canonical: "https://imaxeam.com/",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${poppins.variable} antialiased`}>
        <NextIntlClientProvider>
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <MoonLoader color="#f26822" />
              </div>
            }
          >
            {/* Header */}
            <Header />
            <main className="w-full min-h-[calc(100vh-150px)] flex flex-col">
              {children}
            </main>
            {/* Footer */}
            <Footer />
          </Suspense>
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
