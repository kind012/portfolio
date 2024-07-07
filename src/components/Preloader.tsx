import { motion } from "framer-motion";
import { slideUp } from "../helpers/utils/animations/animations";
import { useEffect, useRef, useState } from "react";
import { words } from "../constants/data";
import { Dimension } from "../constants/type";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

const Preloader = () => {
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const textRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const combinedRef = (node: any) => {
    textRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        textRef.current,
        { y: 100 },
        {
          y: 20,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    }
  }, [inView]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen bg-white fixed top-0 left-0 z-[9999] rounded-b-xl w-screen"
    >
      {dimension.width > 0 && (
        <div className="max-h-screen w-full mt-72  flex items-center justify-center gap-3 overflow-hidden h-[130px]">
          <h1
            ref={combinedRef}
            className="text-[42px] text-black font-semibold"
          >
            {words}
          </h1>
        </div>
      )}
    </motion.div>
  );
};

export default Preloader;
