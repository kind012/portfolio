import { motion } from "framer-motion";
import { links } from "../../constants/data";
import { AnimatedLink } from "../transformWordwithTag/AnimatedLink";
import { varients } from "../../helpers/utils/animations/animations";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      className="flex fixed z-[999999] top-0 flex-row lg:justify-between lg:gap-[9.75rem] gap-2 w-full max-w-full lg:pt-6 lg:px-[54px] px-6 pt-6 mix-blend-difference"
      initial="hidden"
      animate="visible"
      variants={varients}
    >
      <nav className="flex flex-row justify-between w-full text-lg font-light text-white items-center">
        <Link to="#">
          <h1 className="font-semibold text-xl lg:text-xl flex items-center gap-2">
            <img
              loading="lazy"
              src="/assets/icon/logos/logo-white.png"
              className="w-5 h-5"
            />
            thienduc
          </h1>
        </Link>

        {links.map((link, i) => {
          return (
            <div
              className="relative group md:inline-block lg:block hidden"
              key={i}
            >
              <AnimatedLink title={link.title} href={link.href} />
            </div>
          );
        })}
      </nav>
    </motion.header>
  );
};

export default Header;
