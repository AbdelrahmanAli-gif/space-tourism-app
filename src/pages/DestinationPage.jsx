import DestinationCard from "../components/Destination/DestinationCard";
import PageTitle from "../components/Common/PageTitle";
import { useNavigator } from "../hooks/useNavigator";

const backgroundStyles = {
  backgroundImage: `url('/Destination.png')`,
};

const DestinationPage = () => {
  useNavigator("/destination/1");

  return (
    <div
      style={backgroundStyles}
      className="page-container flex flex-col gap-8 pt-28"
    >
      <PageTitle number="01" title="PICK YOUR DESTINATION" />
      <DestinationCard />
    </div>
  );
};

export default DestinationPage;
