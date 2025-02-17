import { useNavigation } from "react-router";

export const useLoading = () => {
  const navigation = useNavigation();
  return navigation.state === "loading";
};
