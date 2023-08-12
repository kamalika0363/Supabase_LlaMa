"use client";

import { useState } from "react";
import supabase from "../../config/supabaseClient";

const SignUpPage = () => {
  const [email, setEmail] = useState("dhr2003@gmail.com");
  const [password, setPassword] = useState("123456");

  const signup = async () => {
    try {
      await supabase.auth.signUp({
        email: email,
        password: password,
      });
      await supabase.from("user").insert({ email: email });
      localStorage.setItem("email", email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">
      <button className="border-2 border-white" onClick={() => signup()}>
        Signup
      </button>
    </div>
  );
};

export default SignUpPage;
