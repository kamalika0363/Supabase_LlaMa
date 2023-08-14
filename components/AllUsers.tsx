"use client";

import { useContext, useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import UsersModal from "./UsersModel";
import groupContext from "../context/groupContext";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const { groups, id, user } = useContext(groupContext);
  const users = UsersModal();
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const { data: users } = await supabase
        .from("user")
        .select("id,email,image,groupIds");
      setAllUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (idx: any) => {
    try {
      groups[id].users.push(allUsers[idx]?.id);
      await supabase
        .from("group")
        .update({ users: groups[id].users })
        .eq("user_id", user.id);
      if (allUsers[idx]?.groupIds == null) {
        allUsers[idx].groupIds = [];
      }
      allUsers[idx]?.groupIds.push(groups[id]?.id);
      await supabase
        .from("user")
        .update({ groupIds: allUsers[idx].groupIds })
        .eq("id", allUsers[idx]?.id);
      toast.success(`Added ${allUsers[idx].email}`);
      users.onClose();
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (!users.isOpen) {
    return null;
  }

  return (
    <div className="absolute right-24 gap-2 flex flex-col py-2 bg-gray-800 rounded-lg mt-2">
      {allUsers?.map((user, idx) => (
        <div
          key={user.id}
          onClick={() => addUser(idx)}
          className="flex gap-2 hover:bg-gray-700 px-2"
        >
          {user?.image ? (
            <img
              src={user?.image}
              alt="Image"
              className="w-7 h-7 rounded-full"
            />
          ) : (
            <div className="border-2 px-2 text-base border-white rounded-full">
              {user?.email[0]}
            </div>
          )}
          <div className="text-sm">{user.email}</div>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
