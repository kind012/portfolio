import { motion } from "framer-motion";
import { slideUp, opacity } from "../helpers/utils/animations/animations";
import { useEffect, useState } from "react";
import { words } from "../constants/data";
import { Dimension } from "../constants/type";

const Preloader = () => {
  const [index, setIndex] = useState<number>(0);
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 950 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-[100vw] bg-[#effodf] fixed top-0 left-0 z-[9999] text-black flex items-center justify-center"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-[42px] z-[999] font-semibold"
          >
            <span></span>
            {words[index]}
          </motion.p>
          <svg className="svg-style">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-[#f5f5ef]"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
