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
      className="relative flex flex-col justify-center select-none lg:mb-[109px]"
    >
      <div className=" lg:h-screen lg:px-[75px] lg:pt-[55px] uppercase">
        <div className="flex flex-col lg:flex-row lg:gap-[19rem] items-start lg:items-end mb-[3rem] lg:mb-2">
          <div className="uppercase text-white leading-[1.1]">
            <div className="flex lg:flex-row flex-col items-center gap-[15px]">
              <div className="hidden-text show-text">
                <h1 className="font-bold text-[187px]">{texts[0]}</h1>
                <img
                  src="/assets/images/neon-abstract.png"
                  alt="neon"
                  loading="lazy"
                  className="w-60 h-[120px] object-cover rounded-full hover:skew-y-2 duration-300"
                />
              </div>
            </div>
            <div className="flex items-center lg:pl-[184px] gap-[15px]">
              <div className="hidden-text show-text">
                <img
                  src="/assets/images/man.png"
                  alt="neon"
                  loading="lazy"
                  className="w-60 h-[120px] object-cover rounded-full hover:skew-x-2 duration-300"
                />
                <h1 className="font-bold text-[187px]">{texts[1]}</h1>
              </div>
            </div>
            <div className="flex items-center gap-[15px] lg:pl-[68px]">
              <div className="hidden-text show-text">
                <h1 className="font-bold text-[187px]">{texts[2]}</h1>
                <img
                  src="/assets/images/designer.png"
                  alt="neon"
                  loading="lazy"
                  className="w-60 h-[120px] object-cover rounded-full hover:skew-y-2 duration-300"
                />
                <h1 className="font-bold text-[187px]">{texts[3]}</h1>
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
