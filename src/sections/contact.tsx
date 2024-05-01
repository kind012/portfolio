import Form from "../components/Form";
import RevealUp from "../components/reveal/RevealUp";
const Contact = () => {
  return (
    <section className="pb-[56px] px-[4%] pt-36" id="contact">
      <div>
        <RevealUp>
          <div className="lg:max-w-[829px] max-w-[300px] h-[284px] w-full lg:mb-[84px] mb-10">
            <h5
              className="uppercase text-[#ece6d5] font-bold
            lg:text-[90.4px] text-5xl leading-none"
            >
              got a project? connect me to get infomation.
            </h5>
          </div>
        </RevealUp>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
