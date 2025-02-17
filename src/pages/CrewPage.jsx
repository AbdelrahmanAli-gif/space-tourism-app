import CrewCard from "../components/Crew/CrewCard";
import PageTitle from "../components/Common/PageTitle";
import { redirect, useLoaderData } from "react-router";
import { getAllMembers, getMember } from "../services/apiCrew";

const backgroundStyles = {
  backgroundImage: `url('/Crew.png')`,
};

const CrewPage = () => {
  const [member, links, active] = useLoaderData();

  return (
    <div
      style={backgroundStyles}
      className="page-container flex flex-col gap-8 pt-28"
    >
      <PageTitle number="02" title="MEET YOUR CREW" />
      <CrewCard member={member} links={links} active={active} />
    </div>
  );
};

export const defaultLoader = async ({ params }) => {
  if (!params.id) return redirect("/crew/1");
};

export const dataLoader = async ({ params }) => {
  const member = await getMember(params.id);
  const links = await getAllMembers();
  return [member, links, params.id];
};

export default CrewPage;
