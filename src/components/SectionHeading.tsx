import { motion } from "framer-motion";
import { cardVariants } from "../helpers/utils/animations/animations";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.div
      className="flex items-center gap-4 mb-[60px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={cardVariants}
    >
      <p className="font-normal text-black uppercase w-fit bg-white rounded-3xl py-[6px] px-[14px] font-NeueMontreal">
        {children}
      </p>
    </motion.div>
  );
};

export default SectionHeading;
