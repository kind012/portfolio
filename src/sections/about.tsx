import RevealLeft from "../components/reveal/RevealLeft";
import RevealUp from "../components/reveal/RevealUp";
import SectionHeadingBeige from "../components/SectionHeadingBeige";

const About = () => {
  return (
    <section
      id="about"
      className="lg:mx-[75px] mx-3 bg-black shadow-2xl rounded-3xl px-4 lg:px-20 2xl:px-28 lg:py-[61px]"
    >
      <div className="select-none">
        <SectionHeadingBeige>about me</SectionHeadingBeige>
        <RevealUp>
          <h5 className="text-base font-normal text-gray-400 font-NeueMontreal">
            THIENDUC / FRONT END DEVELOPER
          </h5>
        </RevealUp>
        <div className="pb-[84px] max-w-[850px] w-full pt-5">
          <RevealUp>
            <p className="text-[32px] font-NeueMontreal font-medium leading-[1.2] text-white">
              Hello, I'm a{" "}
              <span className="font-semibold text-blue-300">
                front end developer
              </span>{" "}
              passion about design and user experience. I specialize in
              end-to-end development, i innovate design concepts to enhance your
              projects effectively.
            </p>
          </RevealUp>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 mb-[82px]">
          <div className="rounded-xl border pt-[35px] pl-[33px] pr-[49px] mb-[41px] flex flex-col  gap-[13px] max-w-[431px] w-full">
            <RevealUp>
              <div className="w-3 h-3 bg-blue-300 rounded-full absolute animate-pulse" />
              <h3 className="text-white text-2xl font-medium pt-[18px] font-NeueMontreal mb-4">
                UI Design
              </h3>
              <div className="max-w-[349px] w-full h-28">
                <p className="text-gray-400 text-[20px] font-normal leading-[1.2] font-NeueMontreal">
                  I create innovative designs for a wide range of digital
                  platforms, including apps, websites, and other digital
                  products in Figma.
                </p>
              </div>
            </RevealUp>
          </div>
          <div className="rounded-xl border pt-[35px] pl-[33px] pr-[49px] mb-[41px] flex flex-col gap-[13px] max-w-[431px] w-full">
            <RevealUp>
              <div className="w-3 h-3 bg-blue-300 rounded-full absolute animate-pulse" />
              <h3 className="text-white text-2xl font-medium pt-[18px] font-NeueMontreal mb-4">
                Branding
              </h3>
              <div className="max-w-[349px] w-full h-28">
                <p className="text-gray-400 text-[20px] font-normal leading-[1.2] font-NeueMontreal">
                  With my background as a graphic designer, I can create logos,
                  printed matters and enhance branding elements.
                </p>
              </div>
            </RevealUp>
          </div>
          <div className="rounded-xl border pt-[35px] pl-[33px] pr-[49px] mb-[41px] flex flex-col gap-[13px] max-w-[431px] w-full">
            <RevealUp>
              <div className="w-3 h-3 bg-blue-300 rounded-full absolute animate-pulse" />
              <h3 className="text-white text-2xl font-medium pt-[18px] font-NeueMontreal mb-4">
                Framework & Libraries
              </h3>
              <div className="max-w-[349px] w-full h-28">
                <p className="text-gray-400 text-[20px] font-normal leading-[1.2] font-NeueMontreal">
                  I craft websites using Framework & Libraries and transfer full
                  ownership to your organization upon completion.
                </p>
              </div>
            </RevealUp>
          </div>
        </div>

        <RevealLeft>
          <div className="w-full lg:mb-0 mb-5 h-[620px] relative">
            <span className="block absolute rounded-xl text-black bg-white text-xs px-3 py-[7px] top-8 left-8 font-NeueMontreal font-normal z-50">
              Work Place
            </span>
            <img
              src="/assets/images/me.jpg"
              alt="me"
              loading="lazy"
              className="w-full h-full object-cover rounded-xl duration-700 lg:ease-in-out group-hover:scale-105 view"
            />
          </div>
        </RevealLeft>
      </div>
    </section>
  );
};

export default About;
