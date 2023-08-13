"use client";

import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import GroupModal from "./GroupModel";

const Navbar = ({ currentUser }) => {
  const groupModal = GroupModal();

  return (
    <nav className="bg-[#131313] p-4 flex items-center justify-between">
      <button className="text-white text-2xl mr-4">
        {groupModal.isOpen ? (
          <AiOutlineClose onClick={() => groupModal.onClose()} />
        ) : (
          <AiOutlineMenu onClick={() => groupModal.onOpen()} />
        )}
      </button>
      <div className="flex items-center">
        <p className="text-white text-xl">Supabase LlaMa</p>
      </div>

      <div className="flex items-center">
        {currentUser !== undefined ? (
          <div className="flex text-xl md:gap-5 md:mr-4 gap-2">
            <button className="text-2xl">
              <AiOutlineUserAdd />
            </button>
            {currentUser?.image ? (
              <img
                src={currentUser?.image}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="border-2 px-2 border-white rounded-full">
                {currentUser?.email[0]}
              </div>
            )}
            <p className="text-md">{currentUser?.username}</p>
          </div>
        ) : (
          <button className="text-2xl mx-2">
            <AiOutlineUser />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
