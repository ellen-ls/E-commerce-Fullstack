import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/provider/modal-provider";

import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import prismadb from "@/lib/prismadb"
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const store = prismadb
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
