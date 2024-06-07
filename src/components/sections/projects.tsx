import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import RevealLeft from "../reveal/RevealLeft";
import RevealUp from "../reveal/RevealUp";
import { Album } from "lucide-react";

const Projects = () => {
  return (
    <section className="pb-[76px] px-[4%]" id="projects">
      <RevealUp>
        <SectionHeading>Projects.</SectionHeading>
      </RevealUp>
      <div className="xl:gap-x-18 grid grid-cols-1 gap-x-14 gap-y-10 pb-20 md:grid-cols-12 md:gap-y-20 2xl:gap-x-20 ">
        <div className="flex flex-col items-center lg:word-0">
          <a
            href="https://thienducdev.vercel.app/"
            target="_blank"
            className="group"
          >
            <RevealLeft>
              <div className="mb-4 rounded-xl lg:w-[778px] lg:h-[778px] w-[327px] h-[327px] overflow-hidden transition-all duration-300 xl:mb-5 2xl:mb-6">
                <img
                  src="/assets/images/projects/imgproject1.png"
                  alt="project1"
                  className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-105 ease-expo"
                  loading="lazy"
                />
              </div>
            </RevealLeft>
          </a>
          <div className="flex flex-col lg:flex-row justify-between items-center max-w-max">
            <h3 className="lg:text-[40px] text-[32px] font-bold text-black lg:mb-0 mb-3">
              Portfolio Personal
            </h3>
            <Link
              to="/case-study/personal-portfolio"
              className="flex flex-row items-center gap-x-2 bg-black text-white p-2 rounded-lg"
            >
              <span className="text-sm font-medium">Read Case-Study</span>
              <Album className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col items-center lg:word-1">
          <a
            href="https://blog-duc.netlify.app/"
            target="_blank"
            className="group"
          >
            <div className="mb-4 rounded-xl lg:w-[533px] lg:h-[533px] w-[327px] h-[327px]  overflow-hidden transition-all duration-300 xl:mb-5 2xl:mb-6">
              <img
                src="/assets/images/projects/imgproject2.png"
                alt="project1"
                className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-105 ease-expo"
                loading="lazy"
              />
            </div>
            <div className="mt-3 flex flex-col lg:flex-row justify-between items-center">
              <h3 className="lg:text-[40px] text-[32px] font-bold text-black lg:mb-0 mb-3">
                Blog
              </h3>
              <Link
                to="/case-study/blog"
                className="flex flex-row items-center gap-x-2 bg-black text-white p-2 rounded-lg"
              >
                <span className="text-sm font-medium">Read Case-Study</span>
                <Album className="w-4 h-4" />
              </Link>
            </div>
          </a>
        </div>

        {/* 3 */}
        <div className="flex flex-col items-center lg:word-2">
          <a
            href="https://todoapp-duc-new.vercel.app/"
            target="_blank"
            className="group"
          >
            <div className="mb-4 rounded-xl lg:w-[533px] lg:h-[533px] w-[327px] h-[327px]  overflow-hidden transition-all duration-300 xl:mb-5 2xl:mb-6">
              <img
                src="/assets/images/projects/imgproject3.png"
                alt="project1"
                className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-105 ease-expo"
                loading="lazy"
              />
            </div>
            <div className="mt-3 flex flex-col lg:flex-row justify-between items-center">
              <h3 className="lg:text-[40px] text-[32px] lg:mb-0 mb-3 font-bold text-black">
                Todo App
              </h3>
              <Link
                to="/case-study/todo-list"
                className="flex flex-row items-center gap-x-2 bg-black text-white p-2 rounded-lg"
              >
                <span className="text-sm font-medium">Read Case-Study</span>
                <Album className="w-4 h-4" />
              </Link>
            </div>
          </a>
        </div>

        <div className="flex flex-col items-center lg:word-3">
          <a
            href="https://strive-platform.vercel.app/"
            target="_blank"
            className="group"
          >
            <RevealLeft>
              <div className="mb-4 rounded-xl lg:w-[778px] lg:h-[778px] w-[327px] h-[327px]  overflow-hidden transition-all duration-300 xl:mb-5 2xl:mb-6">
                <img
                  src="/assets/images/projects/imgproject4.png"
                  alt="comingsoon"
                  className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-105 ease-expo"
                  loading="lazy"
                />
              </div>
            </RevealLeft>
            <div className="mt-3 flex flex-col lg:flex-row justify-between items-center">
              <h3 className="lg:text-[40px] text-[32px] lg:mb-0 mb-3 font-bold text-black">
                Strive
              </h3>
              <Link
                to="/case-study/todo-list"
                className="flex flex-row items-center gap-x-2 bg-black text-white p-2 rounded-lg"
              >
                <span className="text-sm font-medium">Read Case-Study</span>
                <Album className="w-4 h-4" />
              </Link>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
