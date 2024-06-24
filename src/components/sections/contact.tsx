import Form from "../Form";
import RevealUp from "../reveal/RevealUp";
import Footer from "./footer";
const Contact = () => {
  return (
    <section
      className="px-[4%] pt-36 bg-hero-pattern bg-cover  bg-center bg-no-repeat"
      id="contact"
    >
      <div>
        <RevealUp>
          <div className="lg:max-w-[829px] max-w-[300px] h-[284px] w-full lg:mb-[84px] mb-10">
            <h5
              className="uppercase text-black font-bold
            lg:text-[90.4px] text-5xl leading-none"
            >
              got a project? connect me to get infomation.
            </h5>
          </div>
        </RevealUp>

        <Form />
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
