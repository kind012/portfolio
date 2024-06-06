import SectionHeading from "../SectionHeading";
import RevealUp from "../reveal/RevealUp";

const About = () => {
  return (
    <section id="about" className="px-[4%] pt-[2%] pb-44">
      <RevealUp>
        <SectionHeading>A little about me</SectionHeading>
      </RevealUp>
      <div className="flex flex-row gap-x-7">
        <div className="max-w-[950px] w-full sticky top-5">
          <p className="text-2xl font-normal leading-[1.3] mb-[180px]">
            {" "}
            Hi, I'm Duc, a designer by day, and by night and frontend developer,
            I'm still often . My work is my play, deeply passionate about
            sustainable design and coding, I strive to marry aesthetics with
            eco-consciousness in everything I create.
            <br />
            Hi, I'm Duc, a designer by day, and by night and frontend developer,
            I'm still often . My work is my play, deeply passionate about
            sustainable design and coding, I strive to marry aesthetics with
            eco-consciousness in everything I create.
          </p>
          <span className="text-base font-normal block max-w-[480px] w-full ml-[375px]">
            Outside of work, I often listen to music or watch movies. It helps
            me relax so I can create beautiful and wonderful designs, and
            perfect products. Let's make something beautiful together.
          </span>
        </div>

        <div className="max-w-[500px] w-full h-[570px]">
          <img
            src="/assets/images/profile/about-img.jpg"
            alt="me"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
