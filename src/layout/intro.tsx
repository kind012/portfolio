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
    "FRONTEND",
    "DEVELOPER",
    "PORTFOLIO/23",
    "INSTAGRAM",
    "AVAILABLE FOR PERSON",
    "WORK FROM SEP 28'",
  ];

  const variants = {
    hidden: {
      y: "270%",
      transition: { ease: [0.325, 0.04, 0.56, 0.96], duration: 0.95 },
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.475, 0.05, 0.57, 0.97],
        duration: 0.8,
        stagger: {
          ammout: 0.4,
        },
      },
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
      className="relative flex flex-col justify-center select-none lg:mb-[107px]"
    >
      <div className="lg:px-[47px] lg:py-[152px] sm:px-[40px] pl-[25px] lg:h-screen ">
        <div className="flex flex-col lg:flex-row lg:gap-[19rem] items-start lg:items-end overflow-hidden mb-[10.5rem]">
          <div className="lg:leading-[129px] font-semibold sm:text-3xl md:text sm:w-fit lg:max-w-[678px] py-6 ">
            <motion.h1
              className="md:flex-1 lg:text-[160px] font-semibold text-[63px]"
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
              className="lg:text-[160px] font-semibold text-[40px] lg:pl-[157px]"
            >
              {texts[3]}
            </motion.h1>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variants}
              className="lg:text-[24px] lg:w-[231px] lg:pl-[53rem] leading-[52px] font-medium text-[40px] block "
            >
              {texts[4]}
            </motion.span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-8 lg:flex-row">
          <motion.div
            className="font-normal text-base text-[#000000]  w-[245px] overflow-hidden font-ClashGrotesk flex"
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
              <p ref={secondText} className="absolute left-full">
                {texts[1]}
              </p>
            </motion.div>
          </motion.div>
          <div>
            <motion.a
              href="https://www.instagram.com/tranthienducc/"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] font-medium flex items-center gap-1"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              {texts[5]}
              <span className="transition duration-300 ease-in-out hover:rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </span>
            </motion.a>
          </div>
          <div
            className="px-6 font-medium font-ClashGrotesk"
            style={{
              overflow: "hidden",
            }}
          >
            <motion.p initial="hidden" animate="visible" variants={variants}>
              {texts[6]}
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              className=""
            >
              {texts[7]}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
