import supabase from "./supabase";

export const getDestination = async (id) => {
  let { data, error } = await supabase
    .from("Destinations")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error("Destination could not be loaded");
  }
  return data[0];
};

export const getAllDestinations = async () => {
  let { data, error } = await supabase.from("Destinations").select("id,name");
  if (error) {
    throw new Error("Destinations could not be loaded");
  }
  const names = [],
    ids = [];
  data.map((entry) => {
    names.push(entry.name);
    ids.push(entry.id);
  });
  return [names, ids];
};
