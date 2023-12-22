import { useState } from "react";
import { motion } from "framer-motion";
import {
  letterAnimated,
  letterAnimatedTwo,
} from "../../helpers/utils/animations/animations";
import { AnimateWord } from "./AnimateWord";
import { AnimateLinkProps } from "../../constants/type";

const AnimateLink = ({ title, href, target }: AnimateLinkProps) => {
  const [isHovered, setHovered] = useState<boolean>(false);
  return (
    <motion.div
      className="relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimateWord
        title={title}
        href={href}
        target={target}
        animation={letterAnimated}
        isHovered={isHovered}
      />
      <div className="absolute top-0">
        <AnimateWord
          title={title}
          href={href}
          target={target}
          animation={letterAnimatedTwo}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
};

export default AnimateLink;
