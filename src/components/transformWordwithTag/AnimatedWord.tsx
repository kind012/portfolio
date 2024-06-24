import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { titleAnimated } from "../../helpers/utils/animations/animations";

interface AnimatedWordProps {
  title: string;
  animation: Variants;
  isHovered: boolean;
  href?: string;
}
const AnimatedWord = ({
  title,
  animation,
  isHovered,
  href,
}: AnimatedWordProps) => {
  return (
    <motion.a
      className="relative whitespace-nowrap"
      href={href}
      variants={titleAnimated}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
    >
      {title?.split("").map((character, i) =>
        character === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            className="relative inline-block whitespace-nowrap font-normal"
            key={i}
            variants={animation}
          >
            {character}
          </motion.span>
        )
      )}
    </motion.a>
  );
};

export default AnimatedWord;
