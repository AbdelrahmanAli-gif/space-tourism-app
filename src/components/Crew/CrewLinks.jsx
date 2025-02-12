import PropTypes from "prop-types";
import { Link } from "react-router";

const CrewLinks = ({ links, active }) => {
  return (
    <>
      {links.map((link, i) => {
        return (
          <Link
            to={`/crew/${link}`}
            key={i}
            className={`${
              active === link ? "bg-white" : "bg-gray-500 hover:bg-gray-400"
            } size-3 rounded-full md:size-4`}
          ></Link>
        );
      })}
    </>
  );
};

CrewLinks.propTypes = {
  links: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired,
};

export default CrewLinks;
