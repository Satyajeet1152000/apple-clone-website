import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Helper from "@/components/Helper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apple iPhone",
  description: "Explore the world with new latest technologies.",
  icons:{
    shortcut: {
      rel: "icon",
      url: "/assets/images/apple.svg",
      type: "image/svg+xml"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
		    {/* <Helper/> */}
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
