"use client"
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false); // track user login

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#131313] p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl mr-4"
        >
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
        {userLoggedIn ? (
          <div className="text-white text-xl mr-4">
            <img
              src="path_to_profile_picture"
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        ) : (
          <button className="text-white text-xl mr-4">
            <AiOutlineUser />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
