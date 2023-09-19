import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const Intro = () => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  let xPercent = 0;
  const direction = -1;
  const texts = [
    "TRAN THIEN DUC - UI/UX DESIGNER - FRONTEND DEVELOPER -",
    "TRAN THIEN DUC - UI/UX DESIGNER - FRONTEND DEVELOPER -",
    "Front End",
    "Developer",
    "Portfolio/23.",
    "Web developer",
    "Web design",
    "Portfolio 2023",
  ];

  const variants = {
    hidden: {
      y: "370%",
      transition: { ease: [0.325, 0.04, 0.56, 0.96], duration: 0.95 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.475, 0.05, 0.57, 0.97], duration: 0.85 },
    },
  };
  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <section
      id="intro"
      className="relative flex flex-col justify-center select-none h-screen md:mb-[195px]"
    >
      <div className="lg:px-[140px] lg:py-[152px] sm:px-[40px] pl-[25px] lg:w-full">
        <div className="flex flex-col lg:flex-row lg:gap-[19rem] items-start lg:items-end overflow-hidden">
          <div
            className="font-semibold sm:text-3xl md:text lg:leading-[74px] leading-[50px] sm:w-fit lg:max-w-[678px] py-6 font-ClashGrotesk"
            style={{
              display: "block",
            }}
          >
            <motion.h1
              className="overflow-visible md:flex-1 lg:text-[71px] text-[63px]"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              {texts[2]}
            </motion.h1>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              className="lg:text-[71px] text-[40px]"
            >
              {texts[3]}
            </motion.h1>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              className="lg:text-[71px] text-[40px] decoration-black underline"
            >
              {texts[4]}
            </motion.h1>
          </div>
          <div className="flex flex-col gap-[32px] lg:max-w-[452px] ">
            <motion.p
              className="text-base lg:text-lg font-ClashGrotesk "
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              I create{" "}
              <span className="inline-block font-bold">user experiences</span>,
              design beautiful websites for
              <span className="inline-block font-bold"> businesses</span>, and
              connect people through{" "}
              <span className="inline-block font-bold">
                design and development.
              </span>
            </motion.p>
            <motion.div
              className="font-normal text-base text-[#000000] mb-[45px] w-[245px] overflow-hidden font-ClashGrotesk border border-[#909090] rounded-full px-2 py-3 text-center flex"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <motion.div
                className="relative flex whitespace-nowrap font-ClashGrotesk"
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <p ref={firstText}>{texts[0]}</p>
                <p ref={secondText} className=" absoluteleft-full">
                  {texts[1]}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="px-6 font-medium md:px-20 font-ClashGrotesk"
        style={{
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        <motion.p initial="hidden" animate="visible" variants={variants}>
          {texts[5]}
        </motion.p>
        <motion.p initial="hidden" animate="visible" variants={variants}>
          {texts[6]}
        </motion.p>
        <motion.p initial="hidden" animate="visible" variants={variants}>
          {texts[7]}
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
