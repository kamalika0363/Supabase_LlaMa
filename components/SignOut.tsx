"use client";

import supabase from "../config/supabaseClient";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();

  const signOut = async () => {
    localStorage.removeItem("email");
    await supabase.auth.signOut();
    router.refresh();
    router.push("/login");
  };

  return (
    <button
      onClick={() => signOut()}
      className="text-[#bd837f] text-md font-semibold "
    >
      Sign Out
    </button>
  );
};

export default SignOut;
