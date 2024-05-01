import RevealUp from "../components/reveal/RevealUp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-16 lg:mt-11 text-[#ece6d5] lg:pt-[110px] lg:h-[650px] h-[500px] lg:max-w-[1408px] max-w-fit w-full"
    >
      <div className="text-center items-center flex flex-col relative font-Arges leading-tight">
        <RevealUp>
          <h2 className="tracking-[10.2px] text-[22px] font-extrabold uppercase font-Arges">
            tran thien duc
          </h2>
        </RevealUp>
        <RevealUp>
          <h1 className="uppercase font-semibold text-[171.98px]">
            i design things for a living
          </h1>
        </RevealUp>
      </div>

      <div className="max-w-[374px] w-full mt-[95px]">
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
