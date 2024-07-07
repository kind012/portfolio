import { Variants } from "framer-motion";

export const letterAnimated = {
  rest: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};
export const letterAnimatedTwo = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

export const titleAnimated = {
  rest: {
    transition: {
      staggerChildren: 0.002,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.004,
    },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.5, ease: [0.55, 0, 0.24, 1], delay: 0.01 },
  },
};

export const opacity = {
  initial: {
    top: 0,
  },
  enter: {
    top: "-100vh",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const characterAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      stagger: 0.055,
    },
  },
};

export const varients = {
  hidden: {
    y: -99,
    transition: { ease: [0.325, 0.04, 0.56, 0.96], duration: 1 },
    opacity: 0,
  },
  visible: {
    y: 0,
    transition: { ease: [0.475, 0.05, 0.57, 0.97], duration: 1.2 },
    opacity: 1,
  },
};

export const cardVariants: Variants = {
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
