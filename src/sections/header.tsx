import { motion } from "framer-motion";
import { links } from "../constants/data";
import { AnimatedLink } from "../components/transformWordwithTag/AnimatedLink";
import { varients } from "../helpers/utils/animations/animations";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 flex lg:justify-between gap-[9.75rem]  w-full lg:w-full lg:py-6 lg:px-[64px] px-6 py-6 translate-y-0 z-[99999] text-white mix-blend-difference"
      initial="hidden"
      animate="visible"
      variants={varients}
    >
      <Link to="#">
        <h1 className="font-medium text-xl lg:text-xl flex items-center gap-2">
          thienduc
          <img
            loading="lazy"
            src="/assets/icon/logos/starContact.png"
            className="w-4 h-4"
          />
        </h1>
      </Link>

      <nav className="flex flex-col lg:flex-row items-center gap-y-1 lg:gap-x-5 text-xl font-normal text-white">
        {links.map((link, i) => {
          return (
            <div className="relative group md:inline-block" key={i}>
              <AnimatedLink title={link.title} href={link.href} />
            </div>
          );
        })}
      </nav>
    </motion.header>
  );
};

export default Header;

{
  /* <a
        className="block lg:hidden uppercase rounded-full text-base font-medium text-black bg-white px-3 py-1"
        href="#contact"
      >
        get in touch
      </a> */
}
