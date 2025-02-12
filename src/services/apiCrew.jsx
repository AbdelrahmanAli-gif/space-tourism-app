import supabase from "./supabase";

export const getMember = async (id) => {
  let { data, error } = await supabase.from("Members").select("*").eq("id", id);
  if (error) {
    throw new Error("Member could not be loaded");
  }
  return data[0];
};

export const getAllMembers = async () => {
  let { data, error } = await supabase.from("Members").select("id");
  if (error) {
    throw new Error("Members could not be loaded");
  }
  const result = [];
  data.map((entry) => {
    result.push(entry.id);
  });
  return result.sort((a, b) => {
    return a - b;
  });
};
