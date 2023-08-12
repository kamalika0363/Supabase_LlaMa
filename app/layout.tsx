
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Supabase-LlaMa",
  description: "App created for supabase hackathon week 8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
