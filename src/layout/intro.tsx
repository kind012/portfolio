import { useEffect, useRef } from "react";
import gsap from "gsap";
const Intro = () => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  let xPercent = 0;
  const direction = -1;

  const texts = [
    "TRAN THIEN DUC - UI/UX DESIGNER - FRONTEND DEVELOPER -",
    "TRAN THIEN DUC - UI/UX DESIGNER - FRONTEND DEVELOPER -",
    "FRONTEND",
    "DEVELOPER",
    "BASE IN VIETNAM",
    "INSTAGRAM",
    "AVAILABLE FOR FREELANCE",
    "WORK FROM SEP 28'",
  ];

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
      <div className="lg:px-[47px] lg:py-[152px] sm:px-[40px] pl-[25px] lg:h-screen ">
        <div className="flex flex-col lg:flex-row lg:gap-[19rem] items-start lg:items-end mb-[10.5rem]">
          <div className="lg:leading-[129px] font-semibold sm:text-3xl md:text sm:w-fit py-6">
            <div className="hidden-text show-text">
              <h1 className="md:flex-1 lg:text-[160px] font-semibold text-[63px] show-text">
                {texts[2]}
              </h1>
            </div>
            <div className="hidden-text show-text">
              <h1 className="lg:text-[160px] font-semibold text-[40px] lg:pl-[157px] show-text">
                {texts[3]}
              </h1>
            </div>
            <div className="hidden-text show-text">
              <span className="lg:text-[24px] lg:w-full lg:pl-[53rem] leading-[52px] font-medium text-[40px] block show-text">
                {texts[4]}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-8 overflow-hidden lg:flex-row">
          <div className="font-normal text-base text-[#000000]  w-[245px] show-text height-inherit overflow-hidden font-ClashGrotesk flex">
            <div className="relative flex whitespace-nowrap font-ClashGrotesk show-text">
              <p ref={firstText}>{texts[0]}</p>
              <p ref={secondText} className="absolute left-full">
                {texts[1]}
              </p>
            </div>
          </div>
          <div className="show-text height-inherit">
            <a
              href="https://www.instagram.com/tranthienducc/"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] font-medium flex items-center gap-1 show-text "
            >
              {texts[5]}
              <span className="transition duration-300 ease-in-out hover:rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="px-6 font-medium font-ClashGrotesk show-text height-inherit ">
            <p className="show-text">{texts[6]}</p>
            <p className="show-text">{texts[7]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
