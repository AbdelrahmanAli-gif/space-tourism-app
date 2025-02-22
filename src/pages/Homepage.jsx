import { Link } from "react-router";

const Homepage = () => {
  return (
    <>
      <div className="bg-[url('/Homepage-Mobile.png')] md:bg-[url('/Homepage-Desktop.png')] page-container grid grid-cols-6 grid-rows-6 pt-28 sm:grid-cols-8 sm:grid-rows-8 md:grid-cols-12 md:grid-rows-12">
        <div className="px-4 flex flex-col items-center justify-center text-center text-white col-start-1 col-span-full row-start-1 row-span-4 sm:row-start-2 md:col-start-2 md:col-span-5 md:row-span-full md:text-left md:items-start">
          <p className="font-bellefair text-base sm:text-2xl tracking-wider">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="font-bellefair text-4xl sm:text-8xl tracking-wider">
            SPACE
          </p>
          <p className="font-barlow text-sm sm:text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="flex items-center justify-center col-start-1 col-span-full row-start-4 row-span-3 sm:row-start-6 md:col-start-8 md:col-span-4 md:row-start-1 md:row-span-full">
          <Link to={"/destination"}>
            <button className="hover:outline-[64px] hover:outline-gray-500/50 hover:outline font-bellefair text-3xl text-black bg-white size-32 rounded-full sm:size-40 md:size-52">
              EXPLORE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
