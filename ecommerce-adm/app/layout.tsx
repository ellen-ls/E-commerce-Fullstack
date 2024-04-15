import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/provider/modal-provider";

import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import prismadb from "@/lib/prismadb"
import { ToasterProvider } from "@/provider/toast-provider";
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider/>
        <ModalProvider/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}