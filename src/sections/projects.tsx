import SectionHeadingBeige from "../components/SectionHeadingBeige";

const Projects = () => {
  return (
    <section
      className="my-[10%] px-5 md:px-10 xl:px-20 2xl:px-28 bg-[#f5f5ef] rounded-3xl lg:mx-7"
      id="projects"
    >
      <SectionHeadingBeige>Projects</SectionHeadingBeige>
      <div className="grid grid-cols-1 mt-12 gap-[9.3rem] md:grid-cols-12">
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-16">
          <a
            href="abc"
            rel="noreferrer"
            className="inline-block overflow-hidden duration-200 ease-linear group rounded-3xl"
            target="_blank"
          >
            <img
              src="/imgproject1.png"
              loading="lazy"
              alt="portfolio"
              className="w-screen duration-700 ease-in-out group-hover:scale-105 view "
              width="800"
              height="600"
            />
          </a>
          <div className="mt-4">
            <div className="flex mb-3 space-x-1 items-center justify-center px-[14px] py-[4px] w-fit bg-[#15181e] border rounded-xl border-secondary-100">
              <p className="text-white/75 text-body-4 2xl:text-3xl font-Chillax">
                ReactJS • TailwindCSS • TypeScript
              </p>
            </div>
            <div className="2xl:space-y-3">
              <h3 className="font-medium uppercase text-stone-800 text-title 2xl:text-5xl">
                personal portfolio
              </h3>
              <p className="font-light text-stone-700 text-body-2 2xl:text-4xl font-Chillax">
                Frontend Development
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-[31rem] ">
          <a
            href="https://blog-duc.netlify.app"
            rel="noreferrer"
            className="inline-block overflow-hidden duration-200 ease-linear group rounded-3xl"
            target="_blank"
          >
            <img
              src="/imgproject3.png"
              alt="portfolio"
              loading="lazy"
              className="w-screen duration-700 ease-in-out group-hover:scale-105 view"
              width="800"
              height="600"
            />
          </a>
          <div className="mt-4">
            <div className="flex mb-3 space-x-1 items-center justify-center px-[14px] py-[4px] w-fit bg-[#15181e] border rounded-xl border-secondary-100">
              <p className="text-white/75 text-body-4 2xl:text-3xl font-Chillax">
                ReactJS • TailwindCSS • Firebase
              </p>
            </div>
            <div className="2xl:space-y-3">
              <h3 className="font-medium uppercase text-stone-800 text-title 2xl:text-5xl">
                blog
              </h3>
              <p className="font-light text-stone-700 text-body-2 2xl:text-4xl font-Chillax">
                Frontend Development
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 lg:mb-6 ">
          <a
            href="https://todoapp-duc-1yukcb7du-kind012.vercel.app/"
            rel="noreferrer"
            className="inline-block overflow-hidden duration-200 ease-linear group rounded-3xl"
            target="_blank"
          >
            <img
              src="/imgproject2.png"
              alt="portfolio"
              loading="lazy"
              className="w-screen duration-700 ease-in-out group-hover:scale-105 view"
              width="800"
              height="600"
            />
          </a>
          <div className="mt-4">
            <div className="flex mb-3 space-x-1 items-center justify-center px-[14px] py-[4px] w-fit bg-[#15181e] border rounded-xl border-secondary-100">
              <p className="text-white/75 text-body-4 2xl:text-3xl font-Chillax">
                NextJS • TailwindCSS • TypeScript • MongoDB
              </p>
            </div>
            <div className="2xl:space-y-3">
              <h3 className="font-medium uppercase text-stone-800 text-title 2xl:text-5xl">
                Todo App
              </h3>
              <p className="font-light text-stone-700 text-body-2 2xl:text-4xl font-Chillax">
                Frontend Development
              </p>
            </div>
          </div>
        </div>
        <span className="block  text-center text-black lg:text-white/70 lg:bg-[#15181e] lg:border lg:rounded-xl lg:border-secondary-100 whitespace-nowrap lg:h-fit px-[14px] py-[4px] lg:w-fit">
          Coming soon...
        </span>
      </div>
    </section>
  );
};

export default Projects;
