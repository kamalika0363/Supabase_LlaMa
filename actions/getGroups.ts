import supabase from "@/config/supabaseClient";

export default async function getGroups() {
  try {
    const groups: any = [];
    const { data: groupIds } = await supabase
      .from("user")
      .select("groupIds")
      .eq("email", "dhruvrg2003@gmail.com");
    if (groupIds === null) return [];
    groupIds[0].groupIds?.map(async (id: string) => {
      const group = await supabase.from("group").select("*").eq("id", id);
      groups.push(group?.data && group?.data[0]);
    });
    return groups;
  } catch (error: any) {
    return null;
  }
}
