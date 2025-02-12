import { useEffect, useState } from "react";

export const useFetch = (action, value = 1) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const response = await action(value);
      setData(response);
      setIsLoading(false);
    };
    getData();
  }, [action, value]);

  return [data, isLoading];
};
