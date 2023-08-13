import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "../components/Navbar";
import CreateGroup from "../components/CreateGroup";
import GroupState from "../context/GroupState";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supabase-LlaMa",
  description: "App created for supabase hackathon week 8",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <GroupState>
          <CreateGroup />
          <Navbar />
          <div>{children}</div>
        </GroupState>
      </body>
    </html>
  );
}
