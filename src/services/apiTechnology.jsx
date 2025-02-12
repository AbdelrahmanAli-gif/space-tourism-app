import supabase from "./supabase";

export const getTechnology = async (id) => {
  let { data, error } = await supabase
    .from("Technologies")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error("Technology could not be loaded");
  }
  return data[0];
};

export const getAllTechnologies = async () => {
  let { data, error } = await supabase.from("Technologies").select("id");
  if (error) {
    throw new Error("Technologies could not be loaded");
  }
  const result = [];
  data.map((entry) => {
    result.push(entry.id);
  });
  return result.sort((a, b) => {
    return a - b;
  });
};
