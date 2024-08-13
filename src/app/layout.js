"use client";

import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>E-Summit&apos;24</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="text-white">
        <Navbar />
        <main>{children}</main>
        <Footer className="!z-5"/>
      </body>
    </html>
  );
}
