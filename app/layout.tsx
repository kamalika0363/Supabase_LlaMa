import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import getCurrentUser from "../actions/getCurrentUser";
import Navbar from "../components/Navbar";
import CreateGroup from "../components/CreateGroup";

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
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={outfit.className}>
        <CreateGroup currentUser={currentUser} />
        <Navbar currentUser={currentUser} />
        <div>{children}</div>
      </body>
    </html>
  );
}
