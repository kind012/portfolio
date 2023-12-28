import { useEffect } from "react";
import gsap from "gsap";
import { texts } from "../constants/data";

const Intro = () => {
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
      className="relative flex lg:flex-row flex-col lg:justify-start justify-center select-none mb-8 lg:mb-[109px]"
    >
      <div className=" lg:h-screen px-7 lg:px-[75px] pt-20 lg:pt-[55px] uppercase">
        <div className="flex flex-col lg:flex-row lg:gap-[19rem] items-center lg:items-end mb-[3rem] lg:mb-2">
          <div className="uppercase text-white leading-[1.1]">
            <div className="flex lg:flex-row flex-col items-center gap-[15px]">
              <div className="hidden-text show-text">
                <h1 className="font-bold text-[35px] lg:text-[187px]">
                  {texts[0]}
                </h1>
                <img
                  src="/assets/images/waves-cartoon.jpg"
                  alt="waves"
                  loading="lazy"
                  className="lg:w-60 lg:h-[120px] w-[140px] h-[60px] object-cover rounded-full hover:skew-y-2 duration-300"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col items-center lg:pl-[184px] gap-[15px]">
              <div className="hidden-text show-text">
                <img
                  src="/assets/images/man.png"
                  alt="neon"
                  loading="lazy"
                  className="lg:w-60 lg:h-[120px] w-[140px] h-[60px] object-cover rounded-full hover:skew-x-2 duration-300"
                />
                <h1 className="font-bold text-[35px] lg:text-[187px]">
                  {texts[1]}
                </h1>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-2 lg:gap-[15px] lg:pl-[68px]">
              <div className="hidden-text show-text">
                <h1 className="font-bold text-[35px] lg:text-[187px]">
                  {texts[2]}
                </h1>
                <img
                  src="/assets/images/design.jpg"
                  alt="neon"
                  loading="lazy"
                  className="lg:w-60 lg:h-[120px] w-[140px] h-[60px] object-cover rounded-full hover:skew-y-2 duration-300"
                />
                <h1 className="font-bold text-[35px] lg:text-[187px]">
                  {texts[3]}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <ul className="text-white flex flex-row items-center justify-between text-center">
          <li>{texts[4]}</li>
          <li>{texts[5]}</li>
          <li>{texts[6]}</li>
          <li>{texts[7]}</li>
        </ul>
      </div>
    </section>
  );
};

export default Intro;
