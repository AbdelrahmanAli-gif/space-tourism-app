import { redirect, useLoaderData } from "react-router";
import PageTitle from "../components/Common/PageTitle";
import TechnologyCard from "../components/Technology/TechnologyCard";
import { getAllTechnologies, getTechnology } from "../services/apiTechnology";

const backgroundStyles = {
  backgroundImage: `url('/Technology.png')`,
};

const TechnologyPage = () => {
  const [technology, steps, active] = useLoaderData();

  return (
    <div
      style={backgroundStyles}
      className="page-container flex flex-col gap-8 pt-28"
    >
      <PageTitle number="03" title="SPACE LAUNCH 101" />
      <TechnologyCard technology={technology} steps={steps} active={active} />
    </div>
  );
};

export const defaultLoader = async ({ params }) => {
  if (!params.id) return redirect("/technology/1");
};

export const dataLoader = async ({ params }) => {
  const technology = await getTechnology(params.id);
  const steps = await getAllTechnologies();
  return [technology, steps, params.id];
};

export default TechnologyPage;
