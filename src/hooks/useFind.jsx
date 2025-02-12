import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useFind = (id, values, loading) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !values.includes(parseInt(id))) navigate("/not-found");
  }, [id, values, loading, navigate]);
};
