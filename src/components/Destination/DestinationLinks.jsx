import { Link } from "react-router";
import PropTypes from "prop-types";

const DestinationLinks = ({ names, ids, active }) => {
  return (
    <>
      {names.map((name, i) => {
        return (
          <Link
            key={i}
            to={`/destination/${ids[i]}`}
            className={`pb-2 ${
              active === ids[i]
                ? "border-b-4 border-white"
                : "text-violet-200 hover:border-b-4 hover:border-gray-500"
            }`}
          >
            {name.toUpperCase()}
          </Link>
        );
      })}
    </>
  );
};

DestinationLinks.propTypes = {
  names: PropTypes.array.isRequired,
  ids: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired,
};

export default DestinationLinks;
