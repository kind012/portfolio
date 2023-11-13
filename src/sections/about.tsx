import SectionHeadingBeige from "../components/SectionHeadingBeige";

const About = () => {
  return (
    <section
      id="about"
      className="px-5 bg-[#f5f5ef] rounded-3xl md:px-10 xl:px-20 2xl:px-28 lg:mx-7 "
    >
      <div className="select-none section-heading">
        <SectionHeadingBeige>about me</SectionHeadingBeige>
        <div className="flex flex-col items-start gap-8 mt-10 md:flex-row lg:gap-10">
          <div className="top-20 sm:sticky md:top-28 lg:top-32">
            <div className="w-full space-y-4 2xl:space-y-10">
              <h3 className="font-semibold leading-tight text-white translate-y-10 text-heading-3 2xl:text-7xl px-[14px] py-[4px] w-fit bg-[#15181e] border rounded-2xl border-secondary-100  flex items-center gap-3">
                Who am I?
              </h3>
              <p className="relative translate-y-7 lg:translate-y-10 text-body-1 2xl:text-4xl font-Chillax text-stone-700 lg:mb-0">
                😶‍🌫️ Hi —{" "}
                <span className="relative text-[#030303] font-semibold show-gif">
                  {" "}
                  I’m Thien Duc,
                  <span className="w-[8rem] h-28  hidden z-10 top-1/2 left-1/2 absolute pointer-events-none gif-image">
                    <img
                      src="/cat.gif"
                      alt="gifcat"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </span>
                </span>{" "}
                a front end developer based and live in Can Tho, Viet Nam.
                <br />
                <br />
                After graduating from High school, I decided to pursue my
                passion for programming. I enrolled in a college and learned
                coding and software related things to become front-end
                developer. My favorite part of programming is the
                problem-solving aspect. I create experience user interface
                connect people together. My core stack is not{" "}
                <span className="text-[#030303] font-semibold">
                  React, Next.js, Typescript.
                </span>{" "}
                I also have a small passion for design. I am always looking to
                learn new technologies. I am currently looking for a full-time
                position as a{" "}
                <span className="text-[#030303] font-semibold">
                  front-end developer.👨‍💻
                </span>
                <br />
                <br />
                When I'm not coding, I like listening to music and I enjoy it,
                watching movies, I also enjoy learning new things.🎹
              </p>
            </div>
          </div>
          <div className="mb-5 overflow-hidden rounded-md top-28 md:sticky lg:mb-6">
            <img
              src="/me.jpg"
              alt="work"
              loading="lazy"
              className="object-cover object-center w-full h-auto rounded-md aspect-square md:aspect-auto"
              width="600"
              height="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
