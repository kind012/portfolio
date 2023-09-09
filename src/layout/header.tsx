import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
const Header = () => {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const sectionId = (e.target as HTMLAnchorElement).getAttribute(
      "data-section"
    );
    lenis.scrollTo(sectionId);
  };
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
      className="fixed top-0 z-50 flex items-center justify-between w-full px-8 py-3 translate-y-0 bg-secondary-100 "
      initial="hidden"
      animate="visible"
      variants={varients}
    >
      <a href="#">
        <p className="font-bold md:text-lg sm:text-sm">thienduc.</p>
      </a>
      <nav className="flex items-center md:gap-7 text-[17px]">
        <a
          href="#about"
          data-section="about"
          onClick={handleClick}
          className="relative hidden group md:inline-block"
        >
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125rem] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          href="#projects"
          data-section="projects"
          className="relative hidden group md:inline-block"
          onClick={handleClick}
        >
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125rem] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          href="#contact"
          data-section="contact"
          className="relative hidden group md:inline-block"
          onClick={handleClick}
        >
          <span>contact</span>
          <span className="absolute bottom-0 left-0 h-[0.125rem] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a className="duration-200 border cursor-pointer button group hover:border-primary-600 hover:bg-transparent">
          <span className="group-hover:text-black">Let's Talk.</span>
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
