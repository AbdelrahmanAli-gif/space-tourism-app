import CrewCard from "../components/Crew/CrewCard";
import PageTitle from "../components/Common/PageTitle";
import { useNavigator } from "../hooks/useNavigator";

const backgroundStyles = {
  backgroundImage: `url('/Crew.png')`,
};

const CrewPage = () => {
  useNavigator("/crew/1");

  return (
    <div
      style={backgroundStyles}
      className="page-container flex flex-col gap-8 pt-28"
    >
      <PageTitle number="02" title="MEET YOUR CREW" />
      <CrewCard />
    </div>
  );
};

export default CrewPage;
