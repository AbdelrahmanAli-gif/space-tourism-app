import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const [time, setTime] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (time === 0) navigate("/");
      setTime((current) => current - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [time, navigate]);

  return (
    <div
      style={{
        backgroundImage: `url('/Not-Found.jpg')`,
        backgroundBlendMode: "multiply",
      }}
      className="bellefair-regular page-container bg-gray-600 flex flex-col items-center justify-center text-center text-white"
    >
      <h1 className="text-2xl sm:text-4xl">404 - PAGE NOT FOUND</h1>
      <p className="barlow-regular text-violet-200 mt-4 text-base sm:text-lg">
        Redirecting to Home in {time}.
      </p>
    </div>
  );
};

export default NotFound;
