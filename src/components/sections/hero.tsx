import RevealUp from "../reveal/RevealUp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="lg:mx-16 mx-4 lg:mt-11 text-[#ece6d5] pt-[58px] lg:pt-[110px] lg:h-[650px] h-[670px] lg:max-w-[1408px] max-w-fit w-full"
    >
      <div className="lg:text-center lg:items-center flex flex-col relative font-Arges leading-[3]">
        <RevealUp>
          <h2 className="tracking-[10.2px] text-[22px] font-extrabold uppercase font-Arges">
            tran thien duc
          </h2>
        </RevealUp>
        <RevealUp>
          <h1 className="uppercase font-semibold text-[121.98px] lg:text-[171.98px] leading-[84%]">
            i design things for a living
          </h1>
        </RevealUp>
      </div>

      <div className="max-w-[374px] w-full mt-7 lg:mt-[95px]">
        <RevealUp>
          <p className="font-light text-base">
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
