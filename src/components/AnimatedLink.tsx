import { useState } from "react";
import AnimatedWord from "./AnimatedWord";
import { motion } from "framer-motion";
import { letterAnimated, letterAnimatedTwo } from "../libs/animations";

interface AnimatedLinkProps {
  title: string;
  href?: string;
}

export const AnimatedLink = ({ title, href }: AnimatedLinkProps) => {
  const [isHovered, setHovered] = useState<boolean>(false);
  return (
    <motion.div
      className="relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatedWord
        title={title}
        href={href}
        animation={letterAnimated}
        isHovered={isHovered}
      />
      <div className="absolute top-0">
        <AnimatedWord
          title={title}
          href={href}
          animation={letterAnimatedTwo}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
};
