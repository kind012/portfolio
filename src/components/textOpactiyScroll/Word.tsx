import { MotionValue, useTransform } from "framer-motion";
import { ReactPortal } from "react";
import { motion } from "framer-motion";

type WordType = {
  children: ReactPortal | string;
  i?: number;
  range: number[];
  progress: MotionValue<number>;
};
const Word = ({ children, i, range, progress }: WordType) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-3 relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span key={i} style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

export default Word;
