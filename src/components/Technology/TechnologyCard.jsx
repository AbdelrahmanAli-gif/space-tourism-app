import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import {
  getAllTechnologies,
  getTechnology,
} from "../../services/apiTechnology";
import { useFind } from "../../hooks/useFind";
import Spinner from "../Common/Spinner";
import TechnologyLinks from "./TechnologyLinks";

const TechnologyCard = () => {
  const { id } = useParams();
  const [technology, technologyLoading] = useFetch(getTechnology, id);
  const [steps, stepsLoading] = useFetch(getAllTechnologies);

  useFind(id, steps, stepsLoading);

  if (technologyLoading || stepsLoading) return <Spinner />;

  return (
    <div className="bellefair-regular gap-8 grid grid-cols-6 grid-rows-4 sm:grid-cols-8 sm:grid-rows-8 md:grid-cols-12 md:grid-rows-12">
      <div className="flex flex-col items-center justify-center gap-10 col-start-2 col-span-4 row-start-3 row-span-2 sm:col-start-2 sm:col-span-6 sm:row-start-5 sm:row-span-3 md:col-start-2 md:col-span-6 md:row-start-3 md:row-span-7 md:flex-row">
        <TechnologyLinks steps={steps} active={parseInt(id)} />
        <div className="text-white text-center flex flex-col h-full justify-center items-center gap-4 md:gap-12 md:text-left md:items-start">
          <p className="text-gray-500 text-2xl md:text-4xl">
            THE TERMINOLOGY...
          </p>
          <p className="text-4xl md:text-6xl">
            {technology.name.toUpperCase()}
          </p>
          <p className="barlow-regular text-violet-200 mb-10">
            {technology.description}
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('${technology.image}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="col-start-1 col-span-full row-start-1 row-span-2 sm:row-span-4 md:col-start-8 md:col-span-full md:row-start-1 md:row-span-11"
      ></div>
    </div>
  );
};

export default TechnologyCard;
