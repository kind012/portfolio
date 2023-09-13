import { motion } from "framer-motion";

const Intro = () => {
  const texts = [
    "TRAN THIEN DUC - UI/UX DESIGNER - FRONTEND DEVELOPER",
    "Front end developer",
    "Portfolio/23",
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
  return (
    <section
      id="intro"
      className="relative flex flex-col justify-center select-none h-screen md:mb-[195px]"
    >
      <div className="lg:pl-[180px] lg:py-[152px] sm:px-[40px]">
        <motion.p
          className="font-normal text-base text-[#000000] mb-[45px] w-[250px]  overflow-hidden font-ClashGrotesk whitespace-nowrap border border-[#909090] rounded-full px-2 py-3 text-center "
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <span className="inline-block animated">{texts[0]}</span>
        </motion.p>
        <div
          className="font-bold sm:text-3xl lg:leading-[54px] sm:leading-[50px] md:max-w-5xl  sm:w-fit lg:max-w-6xl overflow-hidden py-6"
          style={{
            display: "inline-block",
          }}
        >
          <motion.h1
            className="overflow-visible md:flex-1 text-[93px]"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            {texts[1]}
          </motion.h1>
          <br />
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            className="lg:text-[84px] md:text-[40px] "
          >
            {texts[2]}
          </motion.p>
        </div>
      </div>
      <div
        className="px-10 font-medium md:px-20 font-ClashGrotesk"
        style={{
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        <motion.p initial="hidden" animate="visible" variants={variants}>
          {texts[3]}
        </motion.p>
        <motion.p initial="hidden" animate="visible" variants={variants}>
          {texts[4]}
        </motion.p>
        <motion.p initial="hidden" animate="visible" variants={variants}>
          {texts[5]}
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
