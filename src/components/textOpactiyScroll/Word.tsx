import { useTransform } from "framer-motion";

import { motion } from "framer-motion";
import { WordType } from "../../constants/type";

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
