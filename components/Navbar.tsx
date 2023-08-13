"use client";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import GroupModal from "./GroupModel";
import AllUsers from "./AllUsers";
import UsersModal from "./UsersModel";

const Navbar = ({ currentUser }) => {
  const groupModal = GroupModal();
  const usersModel = UsersModal();

  return (
    <nav className="bg-[#131313] p-4 flex items-center justify-between">
      <button className="md:hidden text-white text-2xl">
        {groupModal.isOpen ? (
          <AiOutlineClose onClick={() => groupModal.onClose()} />
        ) : (
          <AiOutlineMenu onClick={() => groupModal.onOpen()} />
        )}
      </button>
      <div className="flex items-center">
        <p className="text-white">Supabase LlaMa</p>
      </div>

      <div className="flex items-center">
        {currentUser !== undefined ? (
          <div className="flex text-xl md:gap-5 md:mr-4 gap-2">
            <div className="">
              <button className="text-2xl">
                {usersModel.isOpen ? (
                  <AiOutlineUserAdd onClick={() => usersModel.onClose()} />
                ) : (
                  <AiOutlineUserAdd onClick={() => usersModel.onOpen()} />
                )}
              </button>
              <AllUsers />
            </div>
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
