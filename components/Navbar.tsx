"use client";

import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";

const Navbar = ({ currentUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#131313] p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button onClick={toggleMenu} className="text-white text-2xl mr-4">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Short dropdown menu */}
        {menuOpen && (
          <div className="ml-2">
            <ul className="text-white">
              <li className="py-2">Home</li>
              <li className="py-2">About</li>
            </ul>
          </div>
        )}
      </div>

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
