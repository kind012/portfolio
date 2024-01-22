import { ArrowUpRight } from "lucide-react";
import SectionHeadingBeige from "../components/SectionHeadingBeige";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section
      className="lg:px-20 lg:py-[61px] lg:my-[10%] lg:mx-[75px] mx-3  px-4 bg-[#1a1a1a] rounded-3xl"
      id="projects"
    >
      <SectionHeadingBeige>Projects</SectionHeadingBeige>
      <div className="flex flex-col gap-[90px] w-full">
        <div className="max-w-[1203px] w-full h-[40.3rem] relative">
          <img
            src="/assets/images/imgproject1.png"
            alt="img1"
            className="w-full h-full object-cover rounded-[22px]"
          />
          <div className="absolute max-w-[1203px] w-full h-[210.61px] bg-black bottom-0  py-[20.4px] px-[52.2px] rounded-b-[22px] z-[99999]">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-2">
                <h3 className="uppercase text-[90px] font-normal text-white font-Antonio leading-[108.37px]">
                  personal portfolio
                </h3>
                <div className="flex flex-row gap-[11px]">
                  <span className="block text-white bg-[#282828] rounded-[55.3px] text-center py-[4.76px] px-[22.08px] uppercase">
                    personal
                  </span>
                  <span className="block text-white bg-[#282828] rounded-[55.3px] text-center py-[4.76px] px-[22.08px] uppercase">
                    introduce
                  </span>
                </div>
              </div>
              <Link
                to="https://portfolio-kind012.vercel.app/"
                target="_blank"
                className="w-[140px] h-[140px] relative"
              >
                <img
                  src="/assets/images/visit-img.png"
                  alt="icon"
                  className="animate-spinn"
                />
                <ArrowUpRight className="w-10 h-10 absolute inset-12" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1203px] w-full h-[40.3rem] relative">
          <img
            src="/assets/images/imgproject2.png"
            alt="img1"
            className="w-full h-full object-cover rounded-[22px]"
          />
          <div className="absolute max-w-[1203px] w-full h-[210.61px] bg-black bottom-0 z-[99999] py-[20.4px] px-[52.2px] rounded-b-[22px]">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-2">
                <h3 className="uppercase text-[90px] font-normal text-white font-Antonio leading-[108.37px]">
                  blog
                </h3>
                <div className="flex flex-row gap-[11px]">
                  <span className="block text-white bg-[#282828] rounded-[55.3px] text-center py-[4.76px] px-[22.08px] uppercase">
                    personal
                  </span>
                  <span className="block text-white bg-[#282828] rounded-[55.3px] text-center py-[4.76px] px-[22.08px] uppercase">
                    share knowledge
                  </span>
                </div>
              </div>
              <Link
                to="https://blog-duc.netlify.app/"
                target="_blank"
                className="w-[140px] h-[140px] relative"
              >
                <img
                  src="/assets/images/visit-img.png"
                  alt="icon"
                  className="animate-spinn"
                />
                <ArrowUpRight className="w-10 h-10 absolute inset-12" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1203px] w-full h-[40.3rem] relative">
          <img
            src="/assets/images/imgproject3.png"
            alt="img1"
            className="w-full h-full object-cover rounded-[22px]"
          />
          <div className="absolute max-w-[1203px] w-full h-[210.61px] bg-black bottom-0 z-[99999] py-[20.4px] px-[52.2px] rounded-b-[22px]">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-2">
                <h3 className="uppercase text-[90px] font-normal text-white font-Antonio leading-[108.37px]">
                  todo app
                </h3>
                <div className="flex flex-row gap-[11px]">
                  <span className="block text-white bg-[#282828] rounded-[55.3px] text-center py-[4.76px] px-[22.08px] uppercase">
                    personal
                  </span>
                  <span className="block text-white bg-[#282828] rounded-[55.3px] text-center py-[4.76px] px-[22.08px] uppercase">
                    todo list
                  </span>
                </div>
              </div>
              <Link
                to="https://todoapp-duc-new.vercel.app/"
                target="_blank"
                className="w-[140px] h-[140px] relative"
              >
                <img
                  src="/assets/images/visit-img.png"
                  alt="icon"
                  className="animate-spinn"
                />
                <ArrowUpRight className="w-10 h-10 absolute inset-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
