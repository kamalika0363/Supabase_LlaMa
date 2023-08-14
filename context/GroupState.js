"use client";

import { useState } from "react";
import GroupContext from "./groupContext";
import supabase from "../config/supabaseClient";

const GroupState = (props) => {
  const [groups, setGroups] = useState([]);
  const [user, setUser] = useState({});
  const [id, setId] = useState(0);

  const getEmail = async () => {
    try {
      const { data } = await supabase?.auth?.getUser();
      if (data.user === null) {
        return localStorage?.getItem("email");
      }
      await supabase.from("user").insert({ email: data?.user?.email });
      localStorage.setItem("email", data?.user?.email);
      return data?.user?.email;
    } catch (error) {
      console.log(error);
    }
  };

  const getGroups = async () => {
    try {
      const email = await getEmail();
      const temp = [];
      const { data: user } = await supabase
        .from("user")
        .select("*")
        .eq("email", email);
      if (user === null) return [];
      setUser(user[0]);
      user[0].groupIds?.map(async (id) => {
        const group = await supabase.from("group").select("*").eq("id", id);
        temp.push(group?.data && group?.data[0]);
      });
      setGroups(temp);
    } catch (error) {
      return null;
    }
  };

  return (
    <GroupContext.Provider
      value={{
        groups,
        getGroups,
        id,
        setId,
        user,
      }}
    >
      {props.children}
    </GroupContext.Provider>
  );
};
export default GroupState;
