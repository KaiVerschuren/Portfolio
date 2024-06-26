import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio made by kai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ThemeProvider>
          <ClientThemeWrapper>
            <div className="min-h-screen">
              <Navbar />
              {children}
              <Footer />
            </div> 
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
