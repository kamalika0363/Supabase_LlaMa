"use client";

import { useContext, useEffect } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import GroupModal from "./GroupModel";
import CreateGroupModal from "./CreateGroupModel";
import groupContext from "../context/groupContext";
import SignOut from "./SignOut";

const SideBar: React.FC = () => {
  const { groups, getGroups, setId } = useContext(groupContext);
  const groupModal = GroupModal();
  const createGroup = CreateGroupModal();

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <div
      className={`${
        groupModal.isOpen ? "block absolute" : "hidden"
      } bg-gradient-to-b from-[#262626] to-[#141414] p-6 rounded-xl flex flex-col items-center justify-center h-max-full md:block w-32 border-2 border-[#292929] `}
    >
      <div className="flex flex-col">
        {groups &&
          groups?.map((group: any, idx: Number) => (
            <button
              onClick={() => setId(idx)}
              key={group?.id}
              className="border-2 border-[#323333] rounded-full p-[4px] mb-4 items-center justify-center"
            >
              {group?.image ? (
                <img
                  src={group?.image}
                  width="60"
                  height="36"
                  alt={group?.name}
                  className="rounded-full "
                />
              ) : (
                <div className="border-2 py-4 border-white rounded-full">
                  {group?.name[0]}
                </div>
              )}
            </button>
          ))}
        <button
          onClick={() => createGroup.onOpen()}
          className={`border-2 border-[#323333] rounded-full p-4 mb-4`}
        >
          <AiOutlineUsergroupAdd size={36} />
        </button>
      </div>
      <div className="flex flex-col  gap-2 mt-52 items-center">
        <SignOut />
        <button type="submit" className=" text-white rounded-xl">
          <img src="logOut.svg" alt="Sign Out" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
