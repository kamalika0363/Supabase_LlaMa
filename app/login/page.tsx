"use client";

import { useState } from "react";
import supabase from "../../config/supabaseClient";

const LoginPage = () => {
  const [email, setEmail] = useState("dhruvrg2003@gmail.com");
  const [password, setPassword] = useState("123456");

  const login = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export default LoginPage;
