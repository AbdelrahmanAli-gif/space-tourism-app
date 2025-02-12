import PropTypes from "prop-types";
import { Link } from "react-router";

const TechnologyLinks = ({ steps, active }) => {
  return (
    <div className="flex h-full items-center justify-center gap-8 sm:gap-12 md:flex-col">
      {steps.map((step, i) => {
        return (
          <Link key={i} to={`/technology/${step}`}>
            <div
              className={`${
                active === step
                  ? "bg-white"
                  : "border-2 border-gray-500 hover:border-white text-white"
              } size-12 text-xl rounded-full flex justify-center items-center md:size-24 md:text-3xl`}
            >
              {step}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

TechnologyLinks.propTypes = {
  steps: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired,
};

export default TechnologyLinks;
