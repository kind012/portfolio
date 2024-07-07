import SectionHeading from "../SectionHeading";
import RevealUp from "../reveal/RevealUp";

const About = () => {
  return (
    <section
      id="about"
      className="px-[4%] pt-[2%] lg:pb-44 pb-20 flex flex-col lg:flex-row lg:items-start justify-center lg:justify-between max-w-full w-full"
    >
      <RevealUp>
        <SectionHeading>about me</SectionHeading>
      </RevealUp>
      <div className="flex flex-col gap-y-6 max-w-[961px] w-full">
        <img
          src="/assets/images/profile/about.webp"
          alt="about-img"
          className="lg:w-[310px] w-[250px] h-[258px] lg:h-[318px] object-cover rounded-lg"
        />

        <p className="text-[28px] font-medium text-[#a29e9a]">
          I am a front end in Can Tho. I want to deliver a beautiful look to
          every project. With a keen eye for design and a passion for
          innovation, I am creative in creating captivating visual experiences
          that push boundaries and engage audiences.
          <br />
          <br />
          With the knowledge accumulated during the learning and working
          process, it reflects the dedication to excellence and commitment to
          raising the brand to new heights. Currently on a journey to make
          humanity better through my ideas, creativity and imagination.
        </p>
      </div>
    </section>
  );
};

export default About;
