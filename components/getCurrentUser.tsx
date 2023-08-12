"use client";

import supabase from "../config/supabaseClient";
import { useCallback, useState } from "react";

const getCurrentUser = () => {
  const [user, setUser] = useState("");

  const fetchUsers = useCallback(async () => {
    try {
      const email = localStorage.getItem("email");
      const { data: userDetails } = await supabase
        .from("user")
        .select("*")
        .eq("email", email);
      return userDetails;
    } catch (error) {
      console.log(error);
    }
  }, [user, setUser]);

  return { fetchUsers };
};

export default getCurrentUser;
