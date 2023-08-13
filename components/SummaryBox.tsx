"use client";
import React, { useState } from "react";
import Icon from "../public/Icon.svg";

const SummaryBox: React.FC = () => {
  const [links, setLinks] = useState<string[]>([]);

  const handleAddLink = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem(
      "link-input"
    ) as HTMLInputElement;
    setLinks((prevLinks) => [...prevLinks, input.value]);
    input.value = "";
  };

  return (
    <div className="bg-gradient-to-r from-[#161617] to-[#212020] p-6 rounded-xl flex flex-col item-center justify-center md:h-full h-96 md:w-2/5 border-2 border-[#272728] ">
      <div className="bg-[#1c1b1c] p-5 rounded-xl item-center justify-center w-full h-96 border-2 border-[#3a3a3a]">
        <p className="text-gray-300 mb-2 justify-center font-bold">
          Summarize Data
        </p>
        <ul className="mt-4 flex-grow overflow-y-auto">
          {links.map((link, index) => (
            <li key={index} className="text-white mt-2">
              {link}
            </li>
          ))}
        </ul>
      </div>
      <form
        onSubmit={handleAddLink}
        className="mt-20 rounded-lg flex space-x-4"
      >
        <input
          name="link-input"
          className="text-gray-300 rounded-xl p-3 pl-5 w-full border-2 border-[#3a3a3a] bg-gradient-to-r from-[#0F0F0F] to-[#2E2E2E] font-semibold"
          placeholder="Summarize It!!!!"
        />
        <button
          type="submit"
          className=" text-white rounded-xl p-3 border-2 border-[#3a3a3a] bg-[#272728]"
        >
          <img src="Icon.svg" alt="Add" />
        </button>
      </form>
    </div>
  );
};

export default SummaryBox;