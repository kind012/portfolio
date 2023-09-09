import SectionHeading from "../components/SectionHeading";
import project1 from "../assets/newproject1img.png";
import project2 from "../assets/newproject2img.png";
import project3 from "../assets/newproject3img.png";

const Projects = () => {
  return (
    <section
      className="my-[10%] px-5 md:px-10 xl:px-20 2xl:px-28"
      id="projects"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 mt-12 gap-[9.3rem] md:grid-cols-12">
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-16">
          <div>
            <a
              href="abc"
              rel="noreferrer"
              className="inline-block overflow-hidden duration-200 ease-linear group hover:rounded-3xl"
              target="_blank"
            >
              <img
                src={project1}
                loading="lazy"
                alt="portfolio"
                className="w-screen duration-700 ease-in-out group-hover:scale-105 view"
                width="800"
                height="600"
              />
            </a>
            <div className="mt-4">
              <div className="flex mb-3 space-x-1">
                <p className="flex items-center justify-center px-4 py-1 text-black bg-transparent border rounded-full border-primary-600 text-body-4 2xl:text-3xl font-ClashGrotesk">
                  ReactJS * TailwindCSS * TypeScript
                </p>
              </div>
              <div className="2xl:space-y-3">
                <h3 className="font-medium text-black uppercase text-title 2xl:text-5xl">
                  personal portfolio
                </h3>
                <p className="font-light text-black text-body-2 2xl:text-4xl font-ClashGrotesk">
                  Frontend Development
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-[31rem]">
          <div>
            <div>
              <a
                href="https://blog-duc.netlify.app"
                rel="noreferrer"
                className="inline-block overflow-hidden duration-200 ease-linear group hover:rounded-3xl"
                target="_blank"
              >
                <img
                  src={project2}
                  alt="portfolio"
                  loading="lazy"
                  className="w-screen duration-700 ease-in-out group-hover:scale-105 view"
                  width="800"
                  height="600"
                />
              </a>
              <div className="mt-4">
                <div className="flex mb-3 space-x-1">
                  <p className="flex items-center justify-center px-4 py-1 text-black bg-transparent border rounded-full border-primary-600 text-body-4 2xl:text-3xl font-ClashGrotesk">
                    ReactJS * TailwindCSS * Firebase
                  </p>
                </div>
                <div className="2xl:space-y-3">
                  <h3 className="font-medium text-black uppercase text-title 2xl:text-5xl">
                    blog
                  </h3>
                  <p className="font-light text-black text-body-2 2xl:text-4xl font-ClashGrotesk">
                    Frontend Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 ">
          <div>
            <a
              href="https://todoapp-duc-1yukcb7du-kind012.vercel.app/"
              rel="noreferrer"
              className="inline-block overflow-hidden duration-200 ease-linear group hover:rounded-3xl"
              target="_blank"
            >
              <img
                src={project3}
                alt="portfolio"
                loading="lazy"
                className="w-screen duration-700 ease-in-out group-hover:scale-105 view"
                width="800"
                height="600"
              />
            </a>
            <div className="mt-4">
              <div className="flex mb-3 space-x-1">
                <p className="flex items-center justify-center px-4 py-1 text-black bg-transparent border rounded-full border-primary-600 text-body-4 2xl:text-3xl font-ClashGrotesk">
                  NextJS * TailwindCSS * TypeScript * MongoDB
                </p>
              </div>
              <div className="2xl:space-y-3">
                <h3 className="font-medium text-black uppercase text-title 2xl:text-5xl">
                  Todo App
                </h3>
                <p className="font-light text-black text-body-2 2xl:text-4xl font-ClashGrotesk">
                  Frontend Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
