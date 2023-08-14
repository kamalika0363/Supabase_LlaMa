"use client";

import { useContext, useState } from "react";
import groupContext from "../context/groupContext";

const SummaryBox: React.FC = () => {
  const { sumamaryLink, setSumamaryLink } = useContext(groupContext);
  const [output, setOutput] = useState<string>("");

  const handleAddLink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify(sumamaryLink),
      }
    );
    const result = await response.json();
    setOutput(result[0].summary_text);
    setSumamaryLink("");
  };

  return (
    <div className="bg-gradient-to-r from-[#161617] to-[#212020] p-6 rounded-xl flex flex-col item-center justify-center md:h-full h-96 md:w-2/5 border-2 border-[#272728] ">
      <div className="bg-[#1c1b1c] p-5 rounded-xl item-center justify-center w-full h-96 border-2 border-[#3a3a3a]">
        <p className="text-gray-300 mb-2 justify-center font-bold">
          Summarize Data
        </p>
        <h1>{output}</h1>
      </div>
      <form
        onSubmit={handleAddLink}
        className="mt-20 rounded-lg flex space-x-4"
      >
        <input
          id="link"
          name="link"
          value={sumamaryLink}
          onChange={(e) => setSumamaryLink(e.target.value)}
          className="text-gray-300 rounded-xl p-2 pl-5 w-full border-2 border-[#3a3a3a] bg-gradient-to-r from-[#0F0F0F] to-[#2E2E2E] font-semibold"
          placeholder="Add a link or text"
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
