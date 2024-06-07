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

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-[100vw] bg-white fixed top-0 left-0 z-[9999] text-black flex items-center justify-center rounded-b-xl gap-3"
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
          <img
            src="/assets/icon/logos/logo-dark.svg"
            alt="logosicon"
            className="w-7 h-7 bg-transparent text-black"
          />
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
