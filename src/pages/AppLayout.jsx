import { Outlet } from "react-router";
import Navbar from "../components/Common/Navbar";

const AppLayout = () => {
  return (
    <>
      <div className="[&_.page-container]:min-h-screen [&_.page-container]:bg-cover [&_.page-container]:bg-center [&_.page-container]:bg-no-repeat [&_.page-container]:bg-fixed flex flex-col gap-8 min-h-screen relative overflow-hidden">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
