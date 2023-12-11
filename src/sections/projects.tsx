import { Link } from "react-router-dom";
import SectionHeadingBeige from "../components/SectionHeadingBeige";
import RevealLeft from "../components/reveal/RevealLeft";

const Projects = () => {
  return (
    <section
      className="lg:px-20 lg:py-[61px] lg:my-[10%] lg:mx-[75px] mx-3  px-4 bg-white rounded-3xl"
      id="projects"
    >
      <SectionHeadingBeige>Projects</SectionHeadingBeige>
      <div className="flex flex-col gap-[90px] w-full">
        <div className="flex flex-col lg:flex-row gap-[14px] items-end">
          <div className="max-w-[800px]">
            <RevealLeft>
              <Link
                to="https://portfolio-kind012.vercel.app/"
                className="duration-200 ease-linear group rounded-3xl inline-block overflow-hidden"
              >
                <img
                  src="/assets/images/me.jpg"
                  alt="me"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl duration-700 ease-in-out group-hover:scale-105 view"
                />
              </Link>
            </RevealLeft>
          </div>
          <div className="flex flex-col leading-[1.2]">
            <p className="text-sm font-light text-black/75 uppercase tracking-normal">
              ReactJS • TailwindCSS • TypeScript
            </p>
            <h5 className="text-[62px] text-black font-normal uppercase tracking-normal">
              personal portfolio
            </h5>
            <p className="text-sm font-light text-black/75 uppercase">
              Frontend Development
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[14px] text-right items-end">
          <div className="flex flex-col leading-[1.2]  flex-1">
            <p className="text-sm font-light text-black/75 uppercase tracking-normal">
              ReactJS • TailwindCSS • Firebase
            </p>
            <h5 className="text-[62px] text-black font-normal uppercase tracking-normal">
              blog
            </h5>
            <p className="text-sm font-light text-black/75 uppercase">
              Frontend Development
            </p>
          </div>
          <div className="max-w-[800px]">
            <RevealLeft>
              <Link
                to="https://blog-duc.netlify.app/"
                target="_blank"
                className="duration-200 ease-linear group rounded-3xl inline-block overflow-hidden"
              >
                <img
                  src="/assets/images/me.jpg"
                  alt="me"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl duration-700 ease-in-out group-hover:scale-105 view"
                />
              </Link>
            </RevealLeft>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[14px] items-start lg:items-end">
          <div className="max-w-[800px]">
            <RevealLeft>
              <Link
                className="duration-200 ease-linear group rounded-3xl inline-block overflow-hidden"
                target="_blank"
                to="https://todoapp-duc-new.vercel.app/"
              >
                <img
                  src="/assets/images/me.jpg"
                  alt="me"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl duration-700 ease-in-out group-hover:scale-105 view"
                />
              </Link>
            </RevealLeft>
          </div>
          <div className="flex flex-col leading-[1.2]">
            <p className="text-sm font-light text-black/75 uppercase tracking-normal">
              NextJS • TailwindCSS • TypeScript • MongoDB
            </p>
            <h5 className="text-[62px] text-black font-normal uppercase tracking-normal">
              Todo App
            </h5>
            <p className="text-sm font-light text-black/75 uppercase">
              Frontend Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
