import { Link } from "react-router-dom";
import RevealUp from "../components/reveal/RevealUp";

const Contact = () => {
  return (
    <section
      className="lg:my-[3%] my-4 px-5 md:px-10 xl:px-20 2xl:px-28"
      id="contact"
    >
      <div className="h-[620px] bg-[#0d0d0d] rounded-[42.4px] border border-gray-300">
        <div className="flex flex-col items-center text-center mb-[55px] pt-[180px]">
          <RevealUp>
            <span className="uppercase block text-white font-NeueMontreal text-lg text-center mb-3">
              got a project in mind?
            </span>
            <h3 className="uppercase text-white text-5xl lg:text-[95px] font-medium font-NeueMontreal mb-5">
              let's connect
            </h3>
          </RevealUp>
          <Link
            to="mailto:tranthienduc1001@gmail.com"
            className="flex justify-center button duration-300 text-center items-center"
          >
            Write a message
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
