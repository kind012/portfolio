import SectionHeading from "../components/SectionHeading";
import RevealLeft from "../components/reveal/RevealLeft";
import RevealUp from "../components/reveal/RevealUp";
import Tags from "../helpers/utils/tags";

const Projects = () => {
  return (
    <section className="pb-[76px] px-[4%]" id="projects">
      <RevealUp>
        <SectionHeading>Projects.</SectionHeading>
      </RevealUp>
      <div className="xl:gap-x-18 grid grid-cols-1 gap-x-14 gap-y-10 pb-20 md:grid-cols-12 md:gap-y-20 2xl:gap-x-20 ">
        <div className="word-0">
          <a
            href="https://portfolio-kind012.vercel.app/"
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
            <RevealUp>
              <div className="mt-3 flex lg:flex-row flex-col justify-between">
                <h3 className="lg:text-[40px] text-[32px] font-bold text-beige-400 lg:mb-0 mb-3">
                  Portfolio Personal
                </h3>
                <Tags />
              </div>
            </RevealUp>
          </a>
        </div>

        {/* 2 */}
        <div className="word-1">
          <a
            href="https://portfolio-kind012.vercel.app/"
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
            <RevealUp>
              <div className="mt-3 flex flex-col lg:flex-row justify-between">
                <h3 className="lg:text-[40px] text-[32px] font-bold text-beige-400 lg:mb-0 mb-3">
                  Blog
                </h3>
                <Tags />
              </div>
            </RevealUp>
          </a>
        </div>

        {/* 3 */}
        <div className="word-2">
          <a
            href="https://portfolio-kind012.vercel.app/"
            target="_blank"
            className="group"
          >
            <div className="mb-4 rounded-xl lg:w-[533px] lg:h-[533px] w-[327px] h-[327px]  overflow-hidden transition-all duration-300 xl:mb-5 2xl:mb-6">
              <img
                src="/assets/images/projects/imgproject1.png"
                alt="project1"
                className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-105 ease-expo"
                loading="lazy"
              />
            </div>
            <RevealUp>
              <div className="mt-3 flex flex-col lg:flex-row justify-between">
                <h3 className="lg:text-[40px] text-[32px] lg:mb-0 mb-3 font-bold text-beige-400">
                  Todo App
                </h3>
                <Tags />
              </div>
            </RevealUp>
          </a>
        </div>

        <div className="word-3">
          <a
            href="https://portfolio-kind012.vercel.app/"
            target="_blank"
            className="group"
          >
            <RevealLeft>
              <div className="mb-4 rounded-xl lg:w-[778px] lg:h-[778px] w-[327px] h-[327px]  overflow-hidden transition-all duration-300 xl:mb-5 2xl:mb-6">
                <img
                  src="/assets/images/projects/coming-soon.jpg"
                  alt="comingsoon"
                  className="w-full h-full object-cover transition-all duration-[1200ms] group-hover:scale-105 ease-expo"
                  loading="lazy"
                />
              </div>
            </RevealLeft>
            <RevealUp>
              <div className="mt-3 flex flex-col lg:flex-row justify-between">
                <h3 className="lg:text-[40px] text-[32px] lg:mb-0 mb-3 font-bold text-beige-400">
                  Coming soon...
                </h3>
                <Tags />
              </div>
            </RevealUp>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
