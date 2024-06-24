import RevealUp from "../reveal/RevealUp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="lg:pt-[230px] lg:h-[765px] h-[670px] lg:max-w-[1513px] max-w-full w-full bg-hero-pattern bg-cover  bg-center bg-no-repeat z-10"
    >
      <div className="lg:text-center lg:items-center flex flex-col relative font-Arges leading-[3]">
        <RevealUp>
          <h2 className="tracking-[10.2px] text-[22px] font-extrabold uppercase font-Arges text-[#9b7d7d]">
            tran thien duc
          </h2>
        </RevealUp>
        <RevealUp>
          <h1 className="uppercase font-semibold text-[121.98px] lg:text-[171.98px] leading-[84%] text-black">
            i design things for a living
          </h1>
        </RevealUp>
      </div>

      <div className="max-w-[374px] w-full mt-7 lg:mt-[158px] lg:ml-[30px]">
        <RevealUp>
          <p className="font-normal text-base text-[#716868]">
            Front end Developer & UI UX Designer. with a passion for design and
            user experience. I specialize in end-to-end development, I innovate
            design concepts to effectively enhance my clients' projects, helping
            their companies thrive, and creative development.
          </p>
        </RevealUp>
      </div>
    </section>
  );
};

export default Hero;
