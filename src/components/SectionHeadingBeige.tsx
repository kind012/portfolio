import { Variants, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
      <Sparkles className="w-8 h-8 lg:w-12 lg:h-12" />
      <h2 className="text-5xl font-medium text-black uppercase w-fit sm:text-heading-2">
        {children}
      </h2>
      <Sparkles className="w-8 h-8 lg:w-12 lg:h-12" />
    </motion.div>
  );
};

export default SectionHeadingBeige;
