import { motion } from "framer-motion";
import { cardVariants } from "../helpers/utils/animations/animations";
import {} from "lucide-react";
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
      <p className="font-normal text-black uppercase  rounded-lg lg:py-[8px] lg:px-[16px] px-5 py-3 font-NeueMontreal bg-[#e8deff] w-fit flex items-center gap-3">
        <img src="/assets/icon/audio-lines.svg" />
        {children}
      </p>
    </motion.div>
  );
};

export default SectionHeadingBeige;
