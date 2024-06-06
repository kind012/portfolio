import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { caseStudy } from "../../constants/data";

const CaseStudyPage = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const selectedCaseStudy = caseStudy.find(
    (cased) => cased.name === caseStudyId
  );

  const {
    banner,
    title,
    tag,
    info1,
    info2,
    info3,
    info4,
    info5,
    info6,
    info7,
    info8,
    heading,
    desc,
    heading1,
    desc1,
    img,
    heading2,
    desc2,
    link,
  } = selectedCaseStudy!;

  console.log(caseStudyId);

  return (
    <section className="px-[227px] py-8">
      <Link to="/" className="mb-[71px] block">
        <h1 className="font-medium text-xl lg:text-xl flex items-center gap-2 text-white">
          <img
            loading="lazy"
            src="/assets/icon/logos/logo.svg"
            className="w-5 h-5"
          />
          thienduc
        </h1>
      </Link>

      <div className="max-w-[1059px] w-full h-[776px] mb-8">
        <img
          src={banner}
          alt="project1"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-y-8 mb-16">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-medium text-white">{title}</h1>
          <span className="px-4 py-[10px] rounded-xl bg-[#18181b] text-base text-white">
            {tag}
          </span>
        </div>
        <div className="flex flex-row gap-x-14">
          <div className="flex flex-col gap-y-[14px]">
            <p className="text-xl font-normal text-[#a1a1aa] ">{info1}</p>
            <p className="text-xl font-normal text-[#a1a1aa]">{info2}</p>
            <p className="text-xl font-normal text-[#a1a1aa]">{info3}</p>
            <p className="text-xl font-normal text-[#a1a1aa]">{info4}</p>
          </div>

          <div className="flex flex-col gap-y-[14px] text-xl font-normal text-white">
            <p>{info5}</p>
            <p>{info6}</p>
            <p>{info7}</p>
            <p>{info8}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-[22px] mb-[46px]">
        <h1 className="text-2xl font-medium text-white">{heading}</h1>
        <p className="text-base font-normal text-[#a1a1aa]">{desc}</p>
      </div>

      <div className="flex flex-col gap-y-[22px] mb-[46px]">
        <h1 className="text-2xl font-medium text-white">{heading1}</h1>
        <p className="text-base font-normal text-[#a1a1aa]">{desc1}</p>
      </div>
      <div className="max-w-[1059px] w-full h-[776px] mb-[46px]">
        <img
          src={img}
          alt="progress"
          className="w-full h-full rounded-xl object-cover"
        />
      </div>

      <div className="flex flex-col gap-y-[22px] mb-[46px]">
        <h1 className="text-2xl font-medium text-white">{heading2}</h1>
        <p className="text-base font-normal text-[#a1a1aa]">{desc2}</p>
      </div>

      <Link
        to={link}
        className="px-6 py-[10px] rounded-xl bg-[#18181b] text-base text-white border border-gray-700"
        target="_blank"
      >
        Live Demo
      </Link>
    </section>
  );
};

export default CaseStudyPage;
