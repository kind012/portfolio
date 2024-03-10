import RevealUp from "../components/reveal/RevealUp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-16 mt-36 text-black pt-9 lg:h-[600px] h-[500px] lg:max-w-[1408px] max-w-fit w-full"
    >
      <div className="px-8 py-6 items-center flex flex-col relative">
        <img
          src="/assets/icon/circle.svg"
          alt="circle"
          className="absolute transform -translate-x-[21%] -translate-y-[10%] lg:-translate-y-[18%] lg:-translate-x-[5%] lg:w-[444px] lg:h-[444px] w-[300px] h-[300px]  opacity-40"
        />
        <div className="uppercase lg:text-display-0 font-bold leading-[92.5%] text-secondary-300 whitespace-nowrap font-OverusedGrotesk mb-[26px] flex-1 z-20 text-[39px] lg:mr-0 mr-52">
          <RevealUp>
            <h1>hi there, i'm</h1>
          </RevealUp>
          <RevealUp>
            <h2 className="lg:ml-[59px]">thien duc.</h2>
          </RevealUp>
        </div>
        <RevealUp>
          <p className="max-w-[38ch] w-full lg:text-2xl font-medium text-[#6b645c] text-center text-[21px] lg:pr-0 pr-[104px]">
            A frontend developer & web designer propelling startup visions to
            reality.
          </p>
        </RevealUp>
      </div>
    </section>
  );
};

export default Hero;
