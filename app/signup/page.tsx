"use client";

import React, { useState } from "react"; // Import React
import supabase from "../../config/supabaseClient";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGoogleCircle,
} from "react-icons/ai";
import Footer from "../../components/Footer";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const SignUpPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const signInWithGoogle = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleOnChange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const signup = async () => {
    try {
      await supabase.from("user").insert({ email: email });
      localStorage.setItem("email", email);
      await supabase.auth.signUp({
        email: email,
        password: password,
      });
      router.refresh();
      toast.success(`Check Your Email`);
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div>
      <div className="flex flex-col place-items-center bg-[#131313] mt-24 mb-28 overscroll-none">
        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0 bg-[#1c1b1c] border-2 border-[#3a3a3a] rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl font-semibold text-gray-200 mb-4 text-center">
            Signup
          </h1>
          <form className="mt-6 flex flex-col gap-y-4">
            <label className="w-full">
              <p className="mb-1 text-sm text-gray-700">
                Email Address <sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email address"
                className="w-full rounded-md bg-gray-100 p-3 text-gray-800"
              />
            </label>
            <label className="relative">
              <p className="mb-1 text-sm text-gray-700">
                Password <sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                className="w-full rounded-md bg-gray-100 p-3 pr-12 text-gray-800"
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
              className="mt-6 rounded-md bg-gradient-to-r from-yellow-300 to-yellow-500 py-2 px-4 font-medium text-black shadow-md hover:from-yellow-500 hover:to-yellow-700 transform transition-all hover:scale-105"
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-center gap-2 mt-6 rounded-md bg-gradient-to-r from-yellow-300 to-yellow-500 py-2 px-4 font-medium text-black shadow-md hover:from-yellow-500 hover:to-yellow-700 transform transition-all hover:scale-105">
            <button onClick={() => signInWithGoogle()}>
              Sign Up with Google
            </button>
            <AiFillGoogleCircle fontSize={24} fill="#000000" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
