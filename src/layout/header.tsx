import { motion } from "framer-motion";
import { links } from "../utils/data";
import { AnimatedLink } from "../components/AnimatedLink";

const Header = () => {
  const varients = {
    hidden: {
      y: -99,
      transition: { ease: [0.325, 0.04, 0.56, 0.96], duration: 0.95 },
      opacity: 0,
    },
    visible: {
      y: 0,
      transition: { ease: [0.475, 0.05, 0.57, 0.97], duration: 0.85 },
      opacity: 1,
    },
  };

  return (
    <motion.header
      className="fixed top-0 z-50 flex items-center justify-between w-full px-8 py-3 translate-y-0 bg-secondary-100"
      initial="hidden"
      animate="visible"
      variants={varients}
    >
      <a href="#">
        <p className="font-bold md:text-lg sm:text-sm font-ClashGrotesk ">
          thienduc.
        </p>
      </a>
      <nav className="flex items-center md:gap-7 text-[17px] font-ClashGrotesk">
        {links.map((link, i) => {
          return (
            <div className="relative hidden group md:inline-block" key={i}>
              <AnimatedLink title={link.title} href={link.href} />
            </div>
          );
        })}
        <a
          className="duration-200 border button group hover:border-primary-600 hover:bg-transparent cursor-none"
          href="#contact"
          data-section="contact"
        >
          <span className="group-hover:text-black">Let's Talk.</span>
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
