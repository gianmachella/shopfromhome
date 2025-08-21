import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import { AuthProvider } from '@/context/AuthContext';
import { DynaPuff } from 'next/font/google';
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dynaPuff = DynaPuff({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dynapuff',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Shop From Home - Support Local Businesses',
  description: 'Discover and buy from local entrepreneurs. Shop conveniently from home while supporting your community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${dynaPuff.variable}`}>
      <body className="font-sans">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
