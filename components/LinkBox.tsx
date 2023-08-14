"use client";

import { useContext, useState } from "react";
import groupContext from "../context/groupContext";
import supabase from "../config/supabaseClient";

const LinkBox: React.FC = () => {
  const { groups, id, setSumamaryLink } = useContext(groupContext);
  const [link, setLink] = useState<string>("");

  const handleAddLink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (groups[id]?.links == null) {
      groups[id].links = [];
    }
    groups[id]?.links?.push(link);
    await supabase
      .from("group")
      .update({ links: groups[id]?.links })
      .eq("id", groups[id]?.id);
    setLink("");
  };

  return (
    <div className="bg-gradient-to-r from-[#161617] to-[#212020] p-6 rounded-xl flex flex-col item-center justify-center md:h-full h-96 md:w-3/5 border-2 border-[#272728] ">
      <div className="bg-[#1c1b1c] p-5 rounded-xl item-center justify-center w-full h-96 border-2 border-[#3a3a3a]">
        <p className="text-gray-300 mb-2 justify-center font-bold">
          All the links would be posted here
        </p>
        <ul className="mt-4 flex-grow overflow-y-auto">
          {groups[id]?.links?.map((link: String, idx: any) => (
            <li
              onClick={() => setSumamaryLink(link)}
              key={idx}
              className="text-white mt-2"
            >
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
          id="link"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
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

export default LinkBox;
