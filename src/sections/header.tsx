import { motion } from "framer-motion";
import { links } from "../libs/data";
import { AnimatedLink } from "../components/AnimatedLink";
import { varients } from "../libs/animations";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 flex items-center justify-between w-full lg:w-full lg:px-12 px-6 py-6 translate-y-0 mix-blend-difference z-[999] text-[#eff0df]"
      initial="hidden"
      animate="visible"
      variants={varients}
    >
      <a href="#">
        <p className="font-semibold md:text-lg sm:text-sm font-Chillax ">
          thienduc.
        </p>
      </a>
      <nav className="flex items-center md:gap-7 text-[17px] font-Chillax">
        {links.map((link, i) => {
          return (
            <div className="relative hidden group md:inline-block" key={i}>
              <AnimatedLink title={link.title} href={link.href} />
            </div>
          );
        })}
      </nav>
      <a
        href="#contact"
        className="px-8 py-3 text-sm text-black bg-white rounded-full lg:hidden "
      >
        Let's talk.
      </a>
    </motion.header>
  );
};

export default Header;
