import { motion } from "framer-motion";
import { cardVariants } from "../helpers/utils/animations/animations";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.div
      className="flex items-center gap-4 mb-[60px] flex-row "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={cardVariants}
    >
      <img
        src="/assets/icon/star.svg"
        alt="star"
        className=" w-6 h-6 lg:w-8 lg:h-8"
        loading="lazy"
      />
      <p className="font-bold text-[#d1d1c7] text-heading leading-tight">
        {children}
      </p>
    </motion.div>
  );
};

export default SectionHeading;
