import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Groups from "../components/Groups";
import LinksSection from "../components/LinksSection";
import AiSection from "../components/AiSection";
import GroupState from '../context/GroupState';


export default function Home() {
  return (
    <GroupState>
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      <Navbar />
      <div className=" flex flex-row justify-between">
      <Groups/>
      <LinksSection/>
      <AiSection/>
      </div>
      </main>
      <Footer />
    </div>
    </GroupState>
  );
}