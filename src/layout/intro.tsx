import { useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatedLink } from "../components/AnimatedLink";
import { MoveUpRight } from "lucide-react";

const texts = [
  "TRAN THIEN DUC - UI/UX DESIGNER - FRONTEND DEVELOPER -",
  "TRAN THIEN DUC - UI/UX DESIGNER - FRONTEND DEVELOPER -",
  "FRONTEND",
  "DEVELOPER",
  "BASE IN VIETNAM",
];

const Intro = () => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  let xPercent = 0;
  const direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  const initHero = () => {
    gsap.set(".show-text", { y: "101%" });

    gsap.timeline({ defaults: { ease: "expo.out" } }).to(
      ".show-text",
      {
        duration: 1.75,
        y: 0,
        stagger: 0.055,
      },
      0
    );
  };
  useEffect(() => {
    initHero();
  }, []);

  return (
    <section
      id="intro"
      className="relative flex flex-col justify-center select-none lg:mb-[107px]"
    >
      <div className="lg:px-[47px] lg:py-[152px] sm:px-[40px] pl-[25px] lg:h-screen py-[50px]">
        <div className="flex flex-col lg:flex-row lg:gap-[19rem] items-start lg:items-end mb-[3rem] lg:mb-[10.5rem]">
          <div className="lg:leading-[129px] font-bold sm:text-3xl md:text sm:w-fit py-20 lg:py-6">
            <div className="hidden-text show-text">
              <h1 className="md:flex-1 lg:text-[160px] font-semibold text-[53px] show-text font-ClashGrotesk text-[#eff0df]">
                {texts[2]}
              </h1>
            </div>
            <div className="hidden-text show-text">
              <h1 className="lg:text-[160px] font-semibold text-[53px] lg:pl-[157px] show-text font-ClashGrotesk text-[#eff0df]">
                {texts[3]}
              </h1>
            </div>
            <div className="hidden-text show-text">
              <p className="lg:text-[24px] lg:w-full lg:pl-[53rem] leading-[52px] font-medium text-[20px] show-text font-ClashGrotesk text-[#eff0df]">
                {texts[4]}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-4 overflow-hidden lg:gap-8">
          <div className="font-normal text-base text-[#000000] w-[70px]  lg:w-[245px] show-text height-inherit overflow-hidden flex">
            <div className="relative flex whitespace-nowrap font-ClashGrotesk show-text text-stone-300">
              <p ref={firstText}>{texts[0]}</p>
              <p ref={secondText} className="absolute left-full">
                {texts[1]}
              </p>
            </div>
          </div>
          <div className="show-text height-inherit">
            <div className="text-xs lg:text-[15px] font-medium flex items-center gap-1 show-text">
              <AnimatedLink
                title="INSTAGRAM"
                href="https://www.instagram.com/tranthienducc/"
              />
              <span className="transition duration-300 ease-in-out hover:rotate-45">
                <MoveUpRight color="#ffffff" size={17} />
              </span>
            </div>
          </div>
          <div className="px-3 font-medium lg:px-6 font-ClashGrotesk show-text height-inherit  lg:text-[16px] text-xs ">
            <div className="flex flex-row items-center gap-2 show-text">
              <div className="w-[.75rem] h-[.75rem] bg-[#27c927] rounded-[50%] animate-pulse"></div>
              <AnimatedLink title="AVAILABLE OCTOBER 2023" />
            </div>
            <div className="show-text">
              <AnimatedLink title="WORK FROM SEP 28'" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
