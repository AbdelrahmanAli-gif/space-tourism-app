import { Outlet } from "react-router";
import Navbar from "../components/Common/Navbar";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col gap-8 min-h-screen relative overflow-hidden">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
