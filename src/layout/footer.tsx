import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
  const [backToTop, setBackToTop] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        setBackToTop(false);
      } else {
        setBackToTop(true);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex items-end justify-between px-5 py-4 text-center lg:items-center mt-14 sm:flex md:text-body-3">
      <div className="flex flex-row md:w-full lg:w-[57.5vw] lg:justify-between">
        <div className="flex space-x-1 text-stone-300">
          <span>©</span>
          <span>2023</span>
          <span className="font-extrabold 2xl:text-body-1">thienduc</span>
        </div>
        <div className="lg:flex px-[14px] py-[4px] flex-row gap-2  bg-white rounded-2xl items-center hidden">
          <span className="text-xs font-semibold font-ClashGrotesk">
            Available for work in December 2023
          </span>
          <div className="w-[.75rem] h-[.75rem] bg-[#27c927] rounded-[50%] animate-pulse"></div>
        </div>
      </div>
      {backToTop && (
        <button
          onClick={scrollUp}
          className="flex items-center col-span-2 space-x-2 w-fit group 2xl:text-body-1 text-stone-300"
        >
          Back To Top
          <span className="transition duration-300 ease-in-out hover:-translate-y-2">
            <MdOutlineKeyboardDoubleArrowUp size={25} />
          </span>
        </button>
      )}
    </footer>
  );
};

export default Footer;
