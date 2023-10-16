import ellipse from "../assets/elilipse.svg";
import { Variants, motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 30,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.15,
      duration: 0.3,
    },
  },
};

const SectionHeadingBeige = ({ children }: SectionHeadingProps) => {
  return (
    <motion.div
      className="flex items-center justify-center gap-4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={cardVariants}
    >
      <img src={ellipse} alt="eips" />
      <h2 className="text-5xl font-medium uppercase w-fit sm:text-heading-2 text-black">
        {children}
      </h2>
      <img src={ellipse} alt="eips" />
    </motion.div>
  );
};

export default SectionHeadingBeige;
