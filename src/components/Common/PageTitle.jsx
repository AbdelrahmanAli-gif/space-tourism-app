import PropTypes from "prop-types";

const PageTitle = ({ number, title }) => {
  return (
    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12">
      <h1 className="bellefair-regular text-base flex items-center justify-center gap-2 tracking-wider mt-4 text-white col-start-1 col-span-full sm:justify-start sm:text-xl sm:items-end sm:col-start-2 md:text-2xl">
        <span className="text-gray-500 font-bold">{number}</span>
        <span className="font-medium">{title}</span>
      </h1>
    </div>
  );
};

PageTitle.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageTitle;
