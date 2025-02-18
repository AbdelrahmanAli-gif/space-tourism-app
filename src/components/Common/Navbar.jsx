import { useState } from "react";
import { Link, NavLink } from "react-router";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((current) => !current);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="font-bellefair h-16 flex items-center tracking-wider w-full top-0 absolute mb-4 md:mt-4">
      <ul className="grid w-full grid-cols-6 items-center sm:grid-cols-8 md:grid-cols-12">
        <li className="col-start-1 col-span-1 md:col-span-2">
          <Link
            to={"/"}
            className="flex items-center justify-center pt-4 sm:py-0"
          >
            <img src="/Logo.svg" alt="Logo" width={42} height={42} />
          </Link>
        </li>

        <li className="col-start-6 col-span-1 flex justify-center items-center text-white sm:col-start-2 sm:col-span-full md:col-start-3 lg:col-start-6 group">
          <div
            className={`${
              isOpen ? "translate-x-0" : "translate-x-full"
            } [&_.active]:border-r-4 [&_.active]:border-white [&_.active]:sm:border-b-4 [&_.active]:sm:border-r-0 [&._active]:sm:border-white transition duration-500 backdrop-blur-md bg-white bg-opacity-5 fixed top-0 right-0 flex flex-col h-full w-2/3 justify-start gap-6 py-28 pl-6 text-xs sm:static sm:h-fit sm:flex-row sm:w-full sm:justify-center sm:py-0 sm:px-0 sm:translate-x-0 sm:text-base md:gap-12`}
          >
            <NavLink
              onClick={handleClose}
              to="/"
              className="hover:border-gray-500 hover:border-r-4 sm:py-6 sm:hover:border-b-4 sm:hover:border-r-0"
            >
              <span className="font-bold">00</span> HOME
            </NavLink>

            <NavLink
              onClick={handleClose}
              to="/destination"
              className="hover:border-gray-500 hover:border-r-4 sm:py-6 sm:hover:border-b-4 sm:hover:border-r-0"
            >
              <span className="font-bold">01</span> DESTINATION
            </NavLink>

            <NavLink
              onClick={handleClose}
              to="/crew"
              className="hover:border-gray-500 hover:border-r-4 sm:py-6 sm:hover:border-b-4 sm:hover:border-r-0"
            >
              <span className="font-bold">02</span> CREW
            </NavLink>

            <NavLink
              onClick={handleClose}
              to="/technology"
              className="hover:border-gray-500 hover:border-r-4 sm:py-6 sm:hover:border-b-4 sm:hover:border-r-0"
            >
              <span className="font-bold">03</span> TECHNOLOGY
            </NavLink>
          </div>

          <FontAwesomeIcon
            className="z-10 pt-4 sm:py-0 sm:hidden"
            icon={!isOpen ? faBars : faXmark}
            size="2xl"
            onClick={handleIsOpen}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
