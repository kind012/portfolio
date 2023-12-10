import { useRef } from "react";
import SectionHeading from "../components/SectionHeading";
import { useScroll } from "framer-motion";
import Word from "../components/textOpactiyScroll/Word";
import RevealUp from "../components/reveal/RevealUp";

const paragraph =
  "I prioritize understanding user goals, tasks, expectations, and product-related issues to enhance digital project development.";

const Service = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <section className="lg:my-[10%] lg:mx-[75px]" id="service">
      <SectionHeading>services</SectionHeading>
      <div className="max-w-[1110px] w-full mb-11">
        <p
          className="text-[57px] leading-[1.2] font-normal text-white flex flex-wrap"
          ref={element}
          style={{
            opacity: scrollYProgress,
          }}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
      <div className="max-w-[560px] w-full mb-[52px] ml-[47rem]">
        <RevealUp>
          <p className="font-light text-base text-white/75 leading-[1.2] uppercase">
            User research and feedback play a crucial role in the development of
            digital projects. In any UI/UX project, research, experiments, A/B
            tests, and other forms of interaction are important. It is crucial
            to put myself in the user’s shoes and ask questions.
          </p>
        </RevealUp>
      </div>

      <div className="grid grid-cols-3 col-span-3 gap-6">
        {/* One */}
        <div className="max-w-[463px] w-full mb-[41px] flex flex-col gap-[13px]">
          <div className="flex flex-col">
            <div className="border border-t-gray-500 max-w-[463px] w-full mb-1" />
            <span className="text-base font-NeueMontreal font-medium text-[#f2f5f3] mb-2">
              Our culture
            </span>
            <RevealUp>
              <div className="leading-[1.1] text-[80px] font-bold text-white">
                <h3>
                  HTML
                  <br />
                  CSS
                  <br />
                  JAVASCRIPT
                  <br />
                  TYPESCRIPT
                </h3>
              </div>
            </RevealUp>
          </div>
        </div>
        {/* TWO */}
        <div className="max-w-[463px] w-full mb-[41px] flex flex-col gap-[13px]">
          <div className="flex flex-col">
            <div className="border border-t-gray-500 max-w-[463px] w-full mb-1" />
            <span className="text-base font-NeueMontreal font-medium text-[#f2f5f3] mb-2">
              Our service
            </span>
            <RevealUp>
              <div className="leading-[1.1] text-[80px] font-bold text-white">
                <h3>
                  GITHUB
                  <br />
                  GIT
                  <br />
                  PHOSTOSHOP
                  <br />
                  FIGMA
                </h3>
              </div>
            </RevealUp>
          </div>
        </div>
        {/* THREE */}
        <div className="max-w-[463px] w-full mb-[41px] flex flex-col gap-[13px]">
          <div className="flex flex-col">
            <div className="border border-t-gray-500 max-w-[463px] w-full mb-1" />
            <span className="text-base font-NeueMontreal font-medium text-[#f2f5f3] mb-2">
              Our culture
            </span>
            <RevealUp>
              <div className="leading-[1.1] text-[80px] font-bold text-white">
                <h3>
                  REACTJS
                  <br />
                  NEXTJS
                  <br />
                  REACTQUERY
                  <br />
                  GSAP
                </h3>
              </div>
            </RevealUp>
          </div>
        </div>
        {/* FOUR */}
        <div className="max-w-[463px] w-full mb-[41px] flex flex-col gap-[13px]">
          <div className="flex flex-col">
            <div className="border border-t-gray-500 max-w-[463px] w-full mb-1" />
            <span className="text-base font-NeueMontreal font-medium text-[#f2f5f3] mb-2">
              Our approach
            </span>
            <RevealUp>
              <h3 className="mb-4 leading-[1.1] text-[80px] font-bold text-white">
                DESIGN
              </h3>
              <p className="text-xl font-normal text-white/75 font-NeueMontreal">
                With a high sensibility for modern and elegant design, i can
                deliver meaningfull and user-friendly web designs thaw will make
                your business stand out on the digital stage.
              </p>
            </RevealUp>
          </div>
        </div>
        {/* FIVE */}
        <div className="max-w-[463px] w-full mb-[41px] flex flex-col gap-[13px]">
          <div className="flex flex-col">
            <div className="border border-t-gray-500 max-w-[463px] w-full mb-1" />
            <span className="text-base font-NeueMontreal font-medium text-[#f2f5f3] mb-2">
              Our edge
            </span>
            <RevealUp>
              <h3 className="mb-4 leading-[1.1] text-[80px] font-bold text-white">
                THE FULL PACKAGE
              </h3>
              <p className="text-xl font-normal text-white/75 font-NeueMontreal">
                From design to development, i build a complete website from
                scratch and handle every step of the process. I remain available
                for future updates.
              </p>
            </RevealUp>
          </div>
        </div>
        {/* SIX */}
        <div className="max-w-[463px] w-full mb-[41px] flex flex-col gap-[13px]">
          <div className="flex flex-col">
            <div className="border border-t-gray-500 max-w-[463px] w-full mb-1" />
            <span className="text-base font-NeueMontreal font-medium text-[#f2f5f3] mb-2">
              Our performance
            </span>
            <div className="leading-[1.1] text-[80px] font-bold text-white">
              <RevealUp>
                <h3 className="leading-[1.1] text-[80px] font-bold text-white mb-4">
                  DEVELOPMENT
                </h3>
                <p className="text-xl font-normal text-white/75 font-NeueMontreal">
                  Mainly focused on React & NextJS Based technologies, i can
                  build any type of web interface and have been developing
                  several projects both personal and my clients. i use Typescrip
                  for programming.
                </p>
              </RevealUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
