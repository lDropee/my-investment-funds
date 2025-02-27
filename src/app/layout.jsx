import Navbar from "@/components/Navbar";
import { monstserrat } from "../../public/fonts/fonts";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Investment Funds",
  description: "Next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${monstserrat.className}`}>
         <Navbar /> 
        {children}
      </body>
    </html>
  );
}
