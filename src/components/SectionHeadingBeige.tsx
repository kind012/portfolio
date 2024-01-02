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
      <p className="font-normal text-black uppercase w-fit bg-white rounded-lg lg:py-[6px] lg:px-[14px] px-5 py-3 font-NeueMontreal hover:bg-white/80 hover:text-black duration-300">
        {children}
      </p>
    </motion.div>
  );
};

export default SectionHeadingBeige;
