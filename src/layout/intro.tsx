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
    "Front end developer",
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
      <div className="lg:pl-[180px] lg:py-[152px] sm:px-[40px] pl-[25px]">
        <motion.div
          className="font-normal text-base text-[#000000] mb-[45px] w-[245px] overflow-hidden font-ClashGrotesk border border-[#909090] rounded-full px-2 py-3 text-center flex"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className="relative flex whitespace-nowrap">
            <p ref={firstText}>{texts[0]}</p>
            <p ref={secondText} className=" absoluteleft-full">
              {texts[1]}
            </p>
          </div>
        </motion.div>
        <div
          className="font-bold sm:text-3xl md:text lg:leading-[54px] sm:leading-[50px] md:max-w-5xl  sm:w-fit lg:max-w-6xl overflow-hidden py-6"
          style={{
            display: "inline-block",
          }}
        >
          <motion.h1
            className="overflow-visible md:flex-1 lg:text-[93px]  text-[63px]"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            {texts[2]}
          </motion.h1>
          <br />
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            className="lg:text-[84px] text-[40px] "
          >
            {texts[3]}
          </motion.p>
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
          {texts[4]}
        </motion.p>
        <motion.p initial="hidden" animate="visible" variants={variants}>
          {texts[5]}
        </motion.p>
        <motion.p initial="hidden" animate="visible" variants={variants}>
          {texts[6]}
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
