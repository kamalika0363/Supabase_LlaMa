import supabase from "../config/supabaseClient";

export default async function getCurrentUser() {
  try {
    const { data: user } = await supabase
      .from("user")
      .select("*")
      .eq("email", "dhruvrg2003@gmail.com");
    return user && user[0];
  } catch (error: any) {
    return null;
  }
}
