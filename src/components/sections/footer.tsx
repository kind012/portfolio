import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [backToTop, setBackToTop] = useState<boolean>(false);

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
    <footer className="lg:pb-3 pb-5">
      <div className="flex justify-between lg:items-end items-end">
        <p className="lg:text-lg text-base text-[#a29e9a] font-semibold">
          © 2024 Thien Duc
        </p>
        {backToTop && (
          <button
            onClick={scrollUp}
            className="lg:w-[72px] lg:h-[72px] w-[52px] h-[52px] flex justify-center items-center bg-primary-400 rounded-full"
          >
            <ArrowUp />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
