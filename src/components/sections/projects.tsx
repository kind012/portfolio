import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import RevealUp from "../reveal/RevealUp";
import { projectData } from "../../constants/data";
import Hash from "../Hash";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const [scrollPosition, setScrollPosition] = useState(0); // State to track scroll direction
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        setScrollPosition((prev) => Math.max(prev + -100, -300));
      } else {
        setScrollPosition((prev) => Math.min(prev - -100, 0));
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentScrollY = window.scrollY;

    if (inView && currentScrollY > prevScrollY.current) {
      setScrollPosition((prev) => Math.max(prev + -100, -300));
    } else {
      setScrollPosition((prev) => Math.min(prev + 100, 0));
    }
  }, [inView]);
  return (
    <section className="pb-[76px] px-[4%]" id="projects">
      <RevealUp>
        <SectionHeading>
          projects showcase/
          <sup className="text-[40px] lg:text-[80px]"> (4)</sup>
        </SectionHeading>

        <div className="flex flex-row gap-x-12 mb-14 max-w-[792px] w-full ml-[600px]">
          <span className="text-xl font-medium text-[#7e766c] uppercase">
            (projects)
          </span>
          <p className="text-[32px] leading-[41.6px] font-medium text-[#a29e9a] max-w-[518px] w-full">
            Feature personal projects that have been meticulously crafted with
            passion and purpose over the years.
          </p>
        </div>
      </RevealUp>
      <div className="flex flex-col items-start">
        <div className="max-w-[552px] w-full h-fit sticky top-0 overflow-hidden text-[22vw] text-[#a29e9a] font-normal flex-row flex">
          <span className="relative">0</span>
          <div className="relative">
            <div
              className="absolute flex h-full w-fit flex-col transition-all duration-700 ease-in-out-cubic"
              style={{
                transform: `translateY(${scrollPosition}%)`,
              }}
            >
              {projectData.map((_, index) => (
                <span key={index} className="inline-block">
                  {index + 1}․
                </span>
              ))}
            </div>
          </div>
        </div>

        {projectData.map((item, index) => (
          <div
            className="flex flex-col items-center max-w-[792px] w-full h-[876px] mb-32 ml-[600px]"
            key={index}
            ref={ref}
          >
            <Link
              to={item.url}
              target="_blank"
              className="mb-4 lg:w-[792px] lg:h-[792px] w-[327px] h-[327px] xl:mb-5 2xl:mb-6"
            >
              <img
                src={item.image}
                alt="Project Preview"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </Link>
            <div className="flex flex-row justify-between items-end max-w-full w-full">
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-normal text-[#a29e9a]">
                  {item.category}
                </span>
                <Link
                  to={item.slug}
                  className="lg:text-[40px] text-[32px] font-bold text-[#d1d1c7] lg:mb-0 mb-3 block"
                >
                  {item.title}
                </Link>
              </div>
              <Hash />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
