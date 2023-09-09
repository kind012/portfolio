import { useEffect, useState } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";
const Footer = () => {
  const [backToTop, setBackToTop] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
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
    <footer className="flex items-end justify-between px-5 py-4 mt-14 sm:flex text-body-4 md:text-body-3">
      <div className="flex flex-col md:flex-row md:w-full flex-1 lg:w-[57.5vw] justify-between ">
        <div className="flex space-x-1">
          <span>©</span>
          <span>2023</span>
          <span className="font-extrabold 2xl:text-body-1">Thien Duc</span>
        </div>
        <div>
          <span className="text-body-4 2xl:text-body-1 font-ClashGrotesk">
            Code and designed by me 💖
          </span>
        </div>
        {backToTop && (
          <button
            onClick={scrollUp}
            className="flex items-center col-span-2 space-x-2 animate-bounce w-fit group 2xl:text-body-1"
          >
            <HiArrowNarrowUp />
            Back
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
