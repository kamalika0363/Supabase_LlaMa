import React from "react";
import Footer from "../components/Footer";
import LinkBox from "../components/LinkBox";
import SummaryBox from "../components/SummaryBox";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="flex p-2 md:p-6 gap-8">
          <SideBar />
          <div className="flex md:flex-row gap-2 md:gap-8 w-full flex-col">
            <LinkBox />
            <SummaryBox />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}