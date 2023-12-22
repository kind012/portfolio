import { motion } from "framer-motion";
import { titleAnimated } from "../../helpers/utils/animations/animations";
import { AnimateProps } from "../../constants/type";

export const AnimateWord = ({
  title,
  animation,
  isHovered,
  href,
  target,
}: AnimateProps) => {
  return (
    <motion.a
      className="relative whitespace-nowrap"
      href={href}
      variants={titleAnimated}
      initial="rest"
      target={target}
      animate={isHovered ? "hover" : "rest"}
    >
      {title?.split("").map((character, i) =>
        character === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            className="relative inline-block whitespace-nowrap"
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
