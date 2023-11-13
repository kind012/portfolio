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

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <motion.div
      className="flex items-center justify-center gap-4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={cardVariants}
    >
      <h2 className="text-5xl font-medium uppercase w-fit sm:text-heading-2 text-secondary-400">
        {children}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
