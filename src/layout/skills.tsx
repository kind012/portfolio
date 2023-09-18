import SectionHeading from "../components/SectionHeading";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.24em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  return (
    <section className="my-[10%] px-5 md:px-10 xl:px-20 2xl:px-28">
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-14">
        <motion.div
          className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 md:gap-24"
          ref={ref}
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
        >
          <div className="select-none leading-[2.3rem] text-stone-600 md:leading-[2.5rem] lg:leading-[3.4rem] ">
            <p className="font-extrabold text-special 2xl:text-7xl">HTML</p>
            <p className="font-extrabold text-special 2xl:text-7xl">CSS</p>
            <p className="font-extrabold text-special 2xl:text-7xl">
              JavaScript
            </p>
            <p className="font-extrabold text-special 2xl:text-7xl">
              TypeScript
            </p>
          </div>
          <div className="space-y-6">
            <div className="-space-y-6 2xl:space-y-10">
              <h3 className="font-semibold leading-tight text-heading-3 2xl:text-7xl">
                Core
              </h3>
              <p className="max-w-md translate-y-10 xl:max-w-2xl text-body-1 2xl:text-3xl font-ClashGrotesk">
                These are the basic things a programmer needs to be able to
                become a professional front end developer.
              </p>
            </div>
            <div className="w-[60%] h-1 border-b-[#000000]  md:hidden border-b-2 pt-9"></div>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 md:gap-24"
          ref={ref}
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
        >
          <div className="select-none leading-[2.3rem] text-stone-600 md:leading-[2.5rem] lg:leading-[3.4rem]">
            <p className="font-extrabold text-special 2xl:text-7xl">Github</p>
            <p className="font-extrabold text-special 2xl:text-7xl">Git</p>
            <p className="font-extrabold text-special 2xl:text-7xl">
              Photoshop
            </p>
            <p className="font-extrabold text-special 2xl:text-7xl">Figma</p>
          </div>
          <div className="space-y-6">
            <div className="-space-y-6 2xl:space-y-10">
              <h3 className="font-semibold leading-tight text-heading-3 2xl:text-7xl">
                Tools
              </h3>
              <p className="max-w-md translate-y-10 xl:max-w-2xl text-body-1 2xl:text-3xl font-ClashGrotesk">
                These are the basic things a programmer needs to be able to
                become a professional front end developer.
              </p>
            </div>
            <div className="w-[60%] h-1 border-b-[#000000]  md:hidden border-b-2 pt-9"></div>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 md:gap-24"
          ref={ref}
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
        >
          <div className="select-none leading-[2.3rem] text-stone-600 md:leading-[2.5rem] lg:leading-[3.4rem] ">
            <p className="font-extrabold text-special 2xl:text-7xl">ReactJS</p>
            <p className="font-extrabold text-special 2xl:text-7xl">NextJS</p>
            <p className="font-extrabold text-special 2xl:text-7xl">
              TailwindCSS
            </p>
            <p className="font-extrabold text-special 2xl:text-7xl">
              Material UI
            </p>
          </div>
          <div className="space-y-6">
            <div className="-space-y-6 2xl:space-y-10">
              <h3 className="font-semibold leading-tight text-heading-3 2xl:text-7xl">
                Libraries & Framwork
              </h3>
              <p className="max-w-md translate-y-10 xl:max-w-2xl text-body-1 2xl:text-3xl font-ClashGrotesk">
                These are the basic things a programmer needs to be able to
                become a professional front end developer.
              </p>
            </div>
            <div className="w-[60%] h-1 border-b-[#000000]  md:hidden border-b-2 pt-9"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
