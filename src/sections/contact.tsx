import { InstagramIcon, FacebookIcon } from "lucide-react";
const Contact = () => {
  return (
    <section
      className="lg:my-[3%] my-4 px-5 md:px-10 xl:px-20 2xl:px-28"
      id="contact"
    >
      <div className="h-[535px] max-w-[1353px] w-full bg-black rounded-3xl px-8 py-8 relative">
        <h5 className="text-base font-medium uppercase text-white font-NeueMontreal">
          contact
        </h5>

        <div className="flex flex-col gap-4 absolute right-6 top-6">
          <h5 className="text-base font-medium uppercase text-white font-NeueMontreal">
            let's talk
          </h5>
          <InstagramIcon className="w-[72px] h-[72px] bg-[#e8deff] px-5  py-5 text-black rounded-3xl" />
          <FacebookIcon className="w-[72px] h-[72px] bg-[#e8deff] px-5  py-5 text-black rounded-3xl" />
        </div>
        <div className="mb-24">
          <div className="flex items-center gap-3 pt-16 pl-[394px]">
            <img src="/assets/icon/arrow.svg" alt="svg" className="w-10 h-10" />
            <span className="text-3xl font-light text-[#e8deff] relative pb-2 line">
              tranthienduc.dev@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3 pt-16 pl-[650px]">
            <span className="text-3xl font-light text-[#e8deff] relative line pb-2">
              +01 234 567 891
            </span>
          </div>
        </div>

        <h5 className="text-[10rem] text-[#e8deff] uppercase font-bold text-center pb-5">
          let's talk
        </h5>
      </div>
    </section>
  );
};

export default Contact;
