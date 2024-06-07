import Card from "../Card";
import SectionHeading from "../SectionHeading";
import RevealUp from "../reveal/RevealUp";
import { cards } from "../../constants/data";

const Service = () => {
  return (
    <section className="lg:pb-[15px] pb-20 px-[4%]" id="service">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center">
        <RevealUp>
          <SectionHeading>Services.</SectionHeading>
        </RevealUp>
        <div className="lg:max-w-[680px] max-w-[270px] w-full lg:mb-0 mb-[3.75rem]">
          <RevealUp>
            <p className="lg:text-[32px] text-xl leading-tight text-third-500 font-medium">
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
