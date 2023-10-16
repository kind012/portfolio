import { BsFacebook } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import FormInput from "../components/FormInput";
import SectionHeading from "../components/SectionHeading";

const Contact = () => {
  return (
    <section className="my-[10%] px-5 md:px-10 xl:px-20 2xl:px-28" id="contact">
      <SectionHeading>Contact</SectionHeading>
      <div className="md:grid md:grid-cols-6 flex flex-col  gap-[9rem] mt-[50px]">
        <div className="col-span-4">
          <h3 className="max-w-lg font-semibold leading-tight 2xl:max-w-3xl text-heading-3 2xl:text-7xl text-stone-300">
            That's enough of me,
          </h3>
          <p className="mt-3 max-w-md 2xl:max-w-2xl text-body-5 2xl:text-4xl mb-[50px] font-ClashGrotesk text-stone-400">
            Let's talk about you.
          </p>
          <FormInput />
        </div>
        <div className="grid grid-cols-1 col-span-2 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3">
            <h4 className="font-semibold text-body-1 2xl:text-4xl text-stone-300">
              My Contact
            </h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="mailto:hello@thienduc.xyz"
                className="relative cursor-pointer group w-fit"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text font-ClashGrotesk text-stone-400">
                  hello@thienduc.xyz
                </span>
                <span className="absolute bottom-0 left-0 h-[0.12rem] w-0 rounded-full bg-stone-300 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="phoneto:0123456789"
                className="relative cursor-pointer group w-fit"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text font-ClashGrotesk text-stone-400">
                  +84 123 456 789
                </span>
                <span className="absolute bottom-0 left-0 h-[0.12rem] w-0 rounded-full bg-stone-300 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-body-1 2xl:text-4xl text-stone-300">
              My Digital Spaces
            </h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="https://github.com/kind012"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 group "
              >
                <FiGithub />
                <div className="relative">
                  <span className="font-ClashGrotesk text-stone-400">
                    Github
                  </span>
                  <span className="absolute bottom-0 left-0 h-[0.12rem] w-0 rounded-full bg-stone-300 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.facebook.com/tranthienduc1001"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 group "
              >
                <BsFacebook />
                <div className="relative">
                  <span className="font-ClashGrotesk text-stone-400">
                    Facebook
                  </span>
                  <span className="absolute bottom-0 left-0 h-[0.12rem] w-0 rounded-full bg-stone-300 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
