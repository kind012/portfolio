import SectionHeading from "../components/SectionHeading";
import RevealLeft from "../components/reveal/RevealLeft";
import RevealUp from "../components/reveal/RevealUp";
import { Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="px-[4%] pt-[2%] pb-44">
      <RevealUp>
        <SectionHeading>A little about me</SectionHeading>
      </RevealUp>
      <div className="flex flex-row gap-x-28">
        <RevealLeft>
          <div className="lg:w-[650px] lg:h-[650px] w-[300px] h-[450px]">
            <img
              src="/assets/images/profile/me.jpg"
              alt="me"
              className="flex items-center w-full h-full justify-center object-cover rounded-xl "
              loading="lazy"
            />
          </div>
        </RevealLeft>
        <div className="w-full max-w-[500px] flex flex-col gap-y-28 items-center">
          <RevealUp>
            <p className="lg:text-[32px] text-xl leading-tight text-gray-600 font-medium">
              Hi there i'm 'Thien Duc' a front end developer, with a passion for
              design and user experience. I specialize in end-to-end
              development, I innovate design concepts to effectively enhance my
              clients' projects, helping their companies thrive.
            </p>
          </RevealUp>
          <Rocket className="w-36 h-36" />
        </div>
      </div>
    </section>
  );
};

export default About;
