import { motion } from "framer-motion";
import { cardVariants } from "../helpers/utils/animations/animations";

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeadingBeige = ({ children }: SectionHeadingProps) => {
  return (
    <motion.div
      className="flex items-center gap-4 mb-[60px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={cardVariants}
    >
      <p className="font-normal text-white uppercase w-fit bg-black rounded-3xl py-[6px] px-[14px] font-NeueMontreal hover:bg-white/25 hover:text-black duration-300">
        {children}
      </p>
    </motion.div>
  );
};

export default SectionHeadingBeige;
