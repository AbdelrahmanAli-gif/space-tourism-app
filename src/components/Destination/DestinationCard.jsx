import { useParams } from "react-router";
import {
  getAllDestinations,
  getDestination,
} from "../../services/apiDestination";
import { useFetch } from "../../hooks/useFetch";
import Spinner from "../Common/Spinner";
import DestinationLinks from "./DestinationLinks";
import { useFind } from "../../hooks/useFind";

const DestinationCard = () => {
  const { id } = useParams();
  const [destination, destinationLoading] = useFetch(getDestination, id);
  const [[names, ids], linksLoading] = useFetch(getAllDestinations);

  useFind(id, ids, linksLoading);

  if (destinationLoading || linksLoading) return <Spinner />;

  return (
    <div className="font-bellefair gap-8 grid grid-cols-6 grid-rows-2 sm:grid-cols-8 sm:grid-rows-8 md:grid-cols-12 md:grid-rows-12">
      <img
        src={destination.image}
        alt={destination.name.toUpperCase()}
        className="mx-auto my-auto col-start-2 col-span-4 row-start-1 row-span-1 sm:row-start-1 sm:row-span-4 sm:col-start-3 md:col-start-2 md:col-span-4 md:row-start-2 md:row-span-9"
      />
      <div className="flex flex-col text-white items-center text-center justify-center gap-4 col-start-2 col-span-4 row-start-2 row-span-1 sm:col-start-2 sm:col-span-6 sm:row-start-5 sm:row-span-4 md:col-start-7 md:col-span-4 md:row-start-2 md:row-span-9 md:justify-between md:text-left md:items-start">
        <ul className="flex item-center gap-2 sm:gap-4 md:w-full">
          <DestinationLinks names={names} ids={ids} active={parseInt(id)} />
        </ul>
        <p className="text-5xl md:text-8xl">{destination.name.toUpperCase()}</p>
        <p className="font-barlow text-violet-200">{destination.description}</p>
        <hr className="w-full" />
        <div className="grid grid-cols-2 w-full">
          <div className="col-start-1 col-span-1">
            <p className="text-violet-200">AVG. DISTANCE</p>
            <p className="text-2xl sm:text-3xl">
              {destination.distance.toUpperCase()}
            </p>
          </div>
          <div className="col-start-2 col-span-1">
            <p className="text-violet-200">EST. TRAVEL TIME</p>
            <p className="text-2xl sm:text-3xl">
              {destination.time.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
