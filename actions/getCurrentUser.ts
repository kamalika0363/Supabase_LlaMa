import supabase from "@/config/supabaseClient";

export default async function getCurrentUser() {
  try {
    const { data: user } = await supabase
      .from("user")
      .select("*")
      .eq("email", localStorage.getItem("email"));
    return user;
  } catch (error: any) {
    return null;
  }
}
