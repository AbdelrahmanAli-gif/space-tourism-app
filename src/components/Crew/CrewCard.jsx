import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { getAllMembers, getMember } from "../../services/apiCrew";
import Spinner from "../Common/Spinner";
import CrewLinks from "./CrewLinks";
import { useFind } from "../../hooks/useFind";

const CrewCard = () => {
  const { id } = useParams();
  const [member, memberLoading] = useFetch(getMember, id);
  const [links, linksLoading] = useFetch(getAllMembers);

  useFind(id, links, linksLoading);

  if (memberLoading || linksLoading) return <Spinner />;

  return (
    <div className="bellefair-regular gap-2 grid grid-cols-6 grid-rows-2 sm:grid-cols-8 sm:grid-rows-8 sm:gap-8 md:grid-cols-12 md:grid-rows-12">
      <div className="flex flex-col text-white items-center text-center justify-between gap-4 col-start-2 col-span-4 row-start-1 row-span-1 sm:col-start-2 sm:col-span-6 sm:row-start-1 sm:row-span-3 sm:gap-10 md:text-left md:items-start md:col-start-2 md:col-span-4 md:row-start-2 md:row-span-10">
        <div className="w-full h-5/6 gap-8 flex flex-col justify-center">
          <h1 className="text-gray-500 text-2xl sm:text-4xl">
            {member.role.toUpperCase()}
          </h1>
          <h1 className="text-3xl sm:text-5xl">{member.name.toUpperCase()}</h1>
          <p className="barlow-regular text-violet-200">{member.description}</p>
        </div>
        <div className="h-1/6 w-full flex items-center justify-center md:items-end md:justify-start gap-6 md:gap-12">
          <CrewLinks links={links} active={parseInt(id)} />
        </div>
      </div>
      <img
        src={member.image}
        alt={member.name.toUpperCase()}
        className="mx-auto my-auto col-start-2 row-start-2 row-span-full col-span-4 sm:col-start-2 sm:col-span-6 sm:row-start-4 sm:row-span-full md:col-start-7 md:col-span-5 md:row-start-2 md:row-span-10"
      />
    </div>
  );
};

export default CrewCard;
