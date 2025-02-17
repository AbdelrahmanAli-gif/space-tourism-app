import DestinationCard from "../components/Destination/DestinationCard";
import PageTitle from "../components/Common/PageTitle";
import { getAllDestinations, getDestination } from "../services/apiDestination";
import { redirect, useLoaderData } from "react-router";

const backgroundStyles = {
  backgroundImage: `url('/Destination.png')`,
};

const DestinationPage = () => {
  const [destination, links, active] = useLoaderData();

  return (
    <div
      style={backgroundStyles}
      className="page-container flex flex-col gap-8 pt-28"
    >
      <PageTitle number="01" title="PICK YOUR DESTINATION" />
      <DestinationCard
        destination={destination}
        links={links}
        active={active}
      />
    </div>
  );
};

export const defaultLoader = async ({ params }) => {
  if (!params.id) return redirect("/destination/1");
};

export const dataLoader = async ({ params }) => {
  const destination = await getDestination(params.id);
  const links = await getAllDestinations();
  return [destination, links, params.id];
};

export default DestinationPage;
