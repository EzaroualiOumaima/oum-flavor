import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/store/storeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import env from "dotenv";
env.config();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={inter.className}>
          <Navbar />

          <StoreProvider> {children}</StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
