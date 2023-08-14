"use client";

import React, { useState } from "react"; // Import React
import supabase from "../../config/supabaseClient";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const signup = async () => {
    try {
      await supabase.auth.signUp({
        email: "darshanjaju12@gmail.com",
        password: "12345678",
      });
      await supabase.from("user").insert({ email: email });
      localStorage.setItem("email", email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="p-10">
    //   <button className="border-2 border-white" onClick={() => signup()}>
    //     Signup
    //   </button>
    // </div>
    <div>
      <div className="flex flex-col place-items-center bg-[#131313] mt-24 mb-28 overscroll-none">
        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0 bg-[#1c1b1c] border-2 border-[#3a3a3a] rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl font-semibold text-gray-200 mb-4 text-center">
            Signup
          </h1>
          <form className="mt-6 flex flex-col gap-y-4">
            <label className="w-full">
              <p className="mb-1 text-sm text-gray-500">
                Email Address <sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email address"
                className="w-full rounded-md bg-gradient-to-r from-[#0F0F0F] to-[#2E2E2E] p-3 text-gray-400"
              />
            </label>
            <label className="relative">
              <p className="mb-1 text-sm text-gray-500">
                Password <sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                className="w-full rounded-md bg-gradient-to-r from-[#0F0F0F] to-[#2E2E2E] p-3 pr-12 text-gray-400"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <button
              onClick={() => signup()}
              className="mt-6 rounded-md bg-gradient-to-r from-[#0F0F0F] to-[#2E2E2E] py-2 px-4 font-medium text-white shadow-md hover:from-zinc-700 hover:to-zinc-900 transform transition-all hover:scale-105 mb-4"

            >
              Sign In
            </button>
          </form>
          <button className="pl-2" onClick={() => signInWithGoogle()}>Login with Google</button>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
