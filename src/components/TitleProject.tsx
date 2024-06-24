import { Link, To } from "react-router-dom";

type TitleProjectType = {
  title: string;
  categories: string;
  url: To;
};
const TitleProject = ({ title, url, categories }: TitleProjectType) => {
  return (
    <div className="flex flex-col leading-tight">
      <span className="text-lg font-normal text-[#a29e9a]">{categories}</span>
      <Link
        to={url}
        className="lg:text-[40px] text-[32px] font-bold text-[#d1d1c7] lg:mb-0 mb-3 block"
      >
        {title}
      </Link>
    </div>
  );
};

export default TitleProject;
