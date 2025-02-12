import PageTitle from "../components/Common/PageTitle";
import TechnologyCard from "../components/Technology/TechnologyCard";
import { useNavigator } from "../hooks/useNavigator";

const backgroundStyles = {
  backgroundImage: `url('/Technology.png')`,
};

const TechnologyPage = () => {
  useNavigator("/technology/1");

  return (
    <div
      style={backgroundStyles}
      className="page-container flex flex-col gap-8 pt-28"
    >
      <PageTitle number="03" title="SPACE LAUNCH 101" />
      <TechnologyCard />
    </div>
  );
};

export default TechnologyPage;
