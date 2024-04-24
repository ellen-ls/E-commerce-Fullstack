import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/provider/modal-provider";
import { ToasterProvider } from "@/provider/toast-provider";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";


const inter = Inter({ subsets: ["latin"] });



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
        <ThemeProvider 
         attribute="class"
         defaultTheme="dark"
         enableSystem
         disableTransitionOnChange
        >
        <ToasterProvider/>
        <ModalProvider/>
        {children}
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
