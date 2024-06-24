import Card from "../Card";
import SectionHeading from "../SectionHeading";
import RevealUp from "../reveal/RevealUp";
import { cards } from "../../constants/data";

const Service = () => {
  return (
    <section className="lg:pb-36 pb-20 px-[4%]" id="service">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center  mb-7">
        <RevealUp>
          <SectionHeading>services</SectionHeading>
        </RevealUp>
        <div className="lg:max-w-[680px] max-w-[270px] w-full lg:mb-0">
          <RevealUp>
            <p className="lg:text-[32px] text-xl leading-tight text-[#a29e9a] font-medium">
              My responsibility is to deliver digital experiences that not only
              serve a great purpose, but also give your business a powerful
              advantage.
            </p>
          </RevealUp>
        </div>
      </div>

      {cards.map((card, index) => {
        return <Card key={index} i={index} card={card} />;
      })}
    </section>
  );
};

export default Service;
