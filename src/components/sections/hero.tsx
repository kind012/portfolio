import { work } from "../../constants/data";

const Hero = () => {
  return (
    <section
      id="hero"
      className="px-5 h-[800px] lg:h-[1047px] max-w-full lg:max-w-[1513px] w-full z-10 relative"
    >
      <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10">
        <div className="bg-white/50 rounded-[50px] max-w-[250px]  lg:max-w-[490px] w-full h-[400px] lg:h-[430px] px-5 py-5 flex flex-col justify-between items-center">
          <img
            src="/assets/icon/upset-star.webp"
            alt="upset-star"
            className="w-40 h-40"
            loading="lazy"
          />
          <p className="text-sm lg:text-base font-medium text-black">
            {" "}
            <span className="text-[#cabcbc]">
              Front end Developer & UI UX Designer{" "}
            </span>
            with a passion for design and user experience. I specialize in
            end-to-end development, I innovate design concepts to effectively
            enhance my clients' projects, helping their companies thrive, and
            creative development.
          </p>
        </div>
        <div className="bg-white/50 rounded-[50px] max-w-[250px] lg:max-w-[490px] w-full h-[180px] lg:h-[490px] lg:px-10 px-2 py-6 lg:py-10 flex flex-col gap-y-1 mt-0 lg:mt-[162px] flex-shrink-0">
          {work.map((data, index) => (
            <div key={index} className="flex flex-row items-center gap-x-3">
              <span className="uppercase text-sm lg:text-2xl font-medium text-black">
                {data.name}
              </span>
              <img src={data.url} alt="icon" className="w-5 h-5" />
            </div>
          ))}
        </div>

        <div className="rounded-full max-w-[300px] lg:max-w-[500px] w-full h-6 lg:h-12 bg-[#fe4e26] flex items-center  justify-between px-2 lg:px-4">
          <img
            src="/assets/icon/star-icon.svg"
            alt="star-icon"
            className="w-5 h-5"
            loading="lazy"
          />
          <p className="text-black font-semibold text-sm lg:text-4xl uppercase">
            tran thien duc
          </p>
          <img
            src="/assets/icon/star-icon.svg"
            alt="star-icon"
            className="w-5 h-5"
            loading="lazy"
          />
        </div>
      </div>

      <img
        src="/assets/images/profile/about.webp"
        alt="about-me"
        className="rounded-[50px] max-w-[490px] w-full h-[460px] object-cover absolute left-[53%] bottom-[30%] z-30 hidden lg:flex"
        loading="lazy"
      />
      <div className="rounded-[50px] max-w-fit lg:max-w-[990px] w-full bg-transparent border border-[#c2bba5] px-4 lg:h-[140px] lg:py-2 absolute bottom-0 lg:bottom-[40%] flex items-center">
        <p className="text-sm lg:text-[7rem] uppercase text-transparent text-stroke-3">
          @darrys.duc
        </p>
      </div>
    </section>
  );
};

export default Hero;
