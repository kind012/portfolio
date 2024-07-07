import RevealUp from "./reveal/RevealUp";

export interface Card {
  images: string;
  title: string;
  description: string;
  tag: string[];
  number: string;
}

interface CardProps {
  card: Card;
  i: number;
}

const Card = ({ card, i }: CardProps) => {
  return (
    <>
      <div className="flex flex-col h-[550px] sticky top-44">
        <div
          style={{
            top: `calc(-5vh + ${i * 80}px)`,
          }}
          className="flex flex-wrap absolute bg-[#080807] max-w-[1392px] w-full border-t border-[#2f2f2d]"
        >
          <div className="flex flex-col mb-[27px] max-w-[695px] w-full">
            <RevealUp>
              <div className="flex flex-row gap-6 items-center">
                <img
                  src={card.images}
                  alt="star"
                  className="lg:w-8 lg:h-8 w-4 h-4"
                  loading="lazy"
                />
                <h3 className="text-[#d1d1c7] lg:text-[56px] text-[32px] font-bold whitespace-nowrap">
                  {card.title}
                </h3>
              </div>
            </RevealUp>
            <div className="max-w-[555px] w-full">
              <RevealUp>
                <p className="text-[#a29e9a] text-2xl font-medium">
                  {card.description}
                </p>
              </RevealUp>
            </div>
          </div>

          <div className="flex flex-col gap-y-3 max-w-[695px] w-full pt-6">
            <span className="lg:text-[40px] text-[20px] text-[#d1d1c7] font-bold flex flex-row gap-x-3">
              {card.tag}
            </span>
            <span className="text-number font-bold text-beige-100 opacity-30">
              {card.number}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
