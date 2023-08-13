"use client";

import { useState } from "react";
import CreateGroupModal from "./CreateGroupModel";
import supabase from "../config/supabaseClient";

const CreateGroup = ({ currentUser }) => {
  const [name, setName] = useState("");
  const createGroup = CreateGroupModal();

  const create = async () => {
    try {
      const { data } = await supabase
        .from("group")
        .insert({
          name: name,
          users: [currentUser?.id],
          user_id: currentUser?.id,
        })
        .select();
      setName("");
      currentUser?.groupIds.push(data && data[0]?.id);
      await supabase
        .from("user")
        .update({ groupIds: currentUser?.groupIds })
        .eq("email", currentUser?.email);
    } catch (error) {
      console.log(error);
    }
  };

  if (!createGroup.isOpen) {
    return null;
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-900/70">
      <div className="flex flex-col bg-gray-800 py-16 px-5 rounded-xl gap-5">
        <label className="w-full">
          <p className="mb-1 text-sm text-gray-400">
            Group Name<sup className="text-pink-500">*</sup>
          </p>
          <input
            required
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Group Name"
            className="text-white w-full rounded-md bg-gradient-to-r from-[#0F0F0F] to-[#2E2E2E] p-3"
          />
        </label>
        <button
          onClick={() => create()}
          className="mt-6 rounded-md bg-gradient-to-r from-[#0F0F0F] to-[#2E2E2E]  py-2 px-4 font-medium text-white shadow-md hover:from-zinc-700 hover:to-zinc-900 transform transition-all hover:scale-105"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateGroup;
