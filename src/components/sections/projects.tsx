import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import RevealLeft from "../reveal/RevealLeft";
import RevealUp from "../reveal/RevealUp";
import Hash from "../Hash";
import TitleProject from "../TitleProject";

const Projects = () => {
  return (
    <section className="pb-[76px] px-[4%]" id="projects">
      <RevealUp>
        <SectionHeading>
          projects showcase/
          <sup className="text-[40px] lg:text-[80px]"> (4)</sup>
        </SectionHeading>
      </RevealUp>
      <div className="xl:gap-x-18 grid grid-cols-1 gap-x-14 gap-y-10 pb-20 md:grid-cols-12 md:gap-y-20 2xl:gap-x-20 ">
        <div className="flex flex-col items-center lg:word-0">
          <Link
            to="https://thienducdev.vercel.app/"
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
          </Link>
          <div className="flex lg:flex-row gap-y-2 flex-col lg:gap-x-40 items-baseline">
            <TitleProject
              categories="Personal"
              url="/case-study/personal-portfolio"
              title="Personal Portfolio"
            />
            <Hash />
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col items-center lg:word-1">
          <Link
            to="https://blog-duc.netlify.app/"
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
            <div className="mt-3 flex flex-col lg:flex-row justify-between items-baseline">
              <TitleProject
                categories="Share knowledge"
                url="/case-study/blog"
                title="Blog"
              />
              <Hash />
            </div>
          </Link>
        </div>

        {/* 3 */}
        <div className="flex flex-col items-center lg:word-2">
          <Link
            to="https://todoapp-duc-new.vercel.app/"
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
            <div className="mt-3 flex flex-col lg:flex-row justify-between items-baseline">
              <TitleProject
                categories="List todo"
                url="/case-study/todo-list"
                title="Todo app"
              />
              <Hash />
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-stretch lg:items-center lg:word-3">
          <Link
            to="https://strive-platform.vercel.app/"
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
            <div className="mt-3 flex flex-col lg:flex-row items-baseline justify-between">
              <TitleProject
                categories="SasS Platform"
                url="/case-study/strive-platform"
                title="Strive / Template Platform"
              />
              <Hash />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
