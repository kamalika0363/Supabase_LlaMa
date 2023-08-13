"use client";

import { useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import GroupModal from "./GroupModel";
import CreateGroupModal from "./CreateGroupModel";
import supabase from "../config/supabaseClient";

const SideBar: React.FC = () => {
  const groupModal = GroupModal();
  const createGroup = CreateGroupModal();
  const [groups, setGroups] = useState([]);

  const getGroups = async () => {
    try {
      const temp: any = [];
      const { data: groupIds } = await supabase
        .from("user")
        .select("groupIds")
        .eq("email", "dhruvrg2003@gmail.com");
      if (groupIds === null) return [];
      groupIds[0].groupIds?.map(async (id: string) => {
        const group = await supabase.from("group").select("*").eq("id", id);
        temp.push(group?.data && group?.data[0]);
      });
      setGroups(temp);
    } catch (error: any) {
      return null;
    }
  };

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
          groups?.map((group: any) => (
            <button
              key={group?.id}
              className="border-2 border-[#323333] rounded-full p-[1px] mb-4"
            >
              {group?.image ? (
                <img
                  src={group?.image}
                  width="36"
                  height="36"
                  alt={group?.name}
                  className="rounded-full"
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
          className={`border-2 border-[#323333] rounded-full p-2 mb-4`}
        >
          <AiOutlineUsergroupAdd size={36} />
        </button>
      </div>
      <div className="flex flex-col  gap-2 mt-52 items-center">
        <button className="text-[#bd837f] text-md font-semibold ">
          Sign Out
        </button>
        <button type="submit" className=" text-white rounded-xl">
          <img src="logOut.svg" alt="Sign Out" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
