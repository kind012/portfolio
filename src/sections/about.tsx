import SectionHeading from "../components/SectionHeading";
import RevealLeft from "../components/reveal/RevealLeft";
import RevealUp from "../components/reveal/RevealUp";

const About = () => {
  return (
    <section id="about" className="px-[4%] pt-[2%] pb-44">
      <RevealUp>
        <SectionHeading>about me.</SectionHeading>
      </RevealUp>
      <div className="relative">
        <RevealLeft>
          <div className="z-text lg:w-[816px] lg:h-[379px] w-[300px] h-[450px]">
            <img
              src="/assets/images/profile/me.jpg"
              alt="me"
              className="flex items-center w-full h-full justify-center object-cover rounded-xl "
              loading="lazy"
            />
          </div>
        </RevealLeft>
        <div className="absolute lg:left-1/3 lg:top-1/3 bottom-[-110px] left-3.5 lg:max-w-[814px] w-full flex justify-end items-end max-w-[300px]">
          <RevealUp>
            <p className="lg:text-[32px] text-xl leading-tight text-third-500 font-medium">
              Hi there i'm 'Thien Duc' a front end developer, with a passion for
              design and user experience. I specialize in end-to-end
              development, I innovate design concepts to effectively enhance my
              clients' projects, helping their companies thrive.
            </p>
          </RevealUp>
        </div>
      </div>
    </section>
  );
};

export default About;
