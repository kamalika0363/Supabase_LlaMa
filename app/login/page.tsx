"use client";
import { useState } from "react";
import supabase from "../../config/supabaseClient";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import Footer from "@/components/FooterLanding";
import Navbar from "@/components/Navbar";
//import { Link, useNavigate } from "react-router-dom"

// const LoginPage = () => {
//   const [email, setEmail] = useState("dhruvrg2003@gmail.com");
//   const [password, setPassword] = useState("123456");

//   const login = async () => {
//     try {
//       await supabase.auth.signInWithPassword({
//         email: email,
//         password: password,
//       });
//       localStorage.setItem("email", email);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={() => login()}>Login</button>
//     </div>
//   );
//};
const LoginForm = () => {
  //const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // })

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      localStorage.setItem("email", email);
    } catch (error) {
      console.log(error);
    }
  }

  const [showPassword, setShowPassword] = useState(false)

  // const { email, password } = formData

  // const handleOnChange = (e) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [e.target.name]: e.target.value,
  //   }))
  // }

  // const handleOnSubmit = (e) => {
  //   e.preventDefault()
  //   // dispatch(login(email, password, navigate))
  // }

  return (
    <div>
      <Navbar/>
    <div className="grid min-h-screen place-items-center bg-gradient-to-r from-purple-700 to-indigo-900">
      <div className="mx-auto w-11/12 max-w-[450px] md:mx-0 bg-white rounded-lg p-6 shadow-lg ">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center ">
          Login
        </h1>
        <form className="mt-6 flex flex-col gap-y-4" onClick={() => login()}>
          <label className="w-full">
            <p className="mb-1 text-sm text-gray-700">
              Email Address <sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="email"
              value={email}
             
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
            type="submit"
            className="mt-6 rounded-md bg-gradient-to-r from-yellow-300 to-yellow-500 py-2 px-4 font-medium text-white shadow-md hover:from-yellow-500 hover:to-yellow-700 transform transition-all hover:scale-105"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default LoginForm;
