import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export const useNavigator = (url) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate(url);
  }, [id, url, navigate]);
};
