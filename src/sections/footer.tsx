import AnimateLink from "../components/transformWord/AnimateLink";

const Footer = () => {
  return (
    <footer className="lg:mx-[75px] mx-3 py-4">
      <div className="flex justify-between items-center">
        <p className="uppercase text-xs lg:text-[15px] text-black font-normal font-NeueMontreal">
          available for freelance
        </p>

        <div className="flex items-center justify-between  gap-1 lg:gap-40">
          <div className="uppercase text-xs lg:text-[15px] text-black font-normal font-NeueMontreal">
            <AnimateLink
              title="facebook"
              href="https://www.facebook.com/tranthienduc1001/"
              target="_blank"
            />
          </div>
          <div className="uppercase text-xs lg:text-[15px] text-black font-normal font-NeueMontreal">
            <AnimateLink
              title="instagram"
              href="https://www.instagram.com/tranthienducc/"
              target="_blank"
            />
          </div>

          <div className="uppercase text-xs lg:text-[15px] text-black font-normal font-NeueMontreal">
            <AnimateLink
              title="github"
              href="https://github.com/kind012"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
