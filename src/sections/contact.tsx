import { Github, Facebook } from "lucide-react";
import { AnimatedLink } from "../components/AnimatedLink";
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
          <p className="mt-3 max-w-md 2xl:max-w-2xl text-body-5 2xl:text-4xl mb-[50px] font-Chillax text-stone-400">
            Let's talk about you.
          </p>
          <FormInput />
        </div>
        <div className="grid grid-cols-1 col-span-2 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3">
            <h4 className="font-semibold text-body-1 2xl:text-4xl text-stone-400 border-thinn px-[14px] py-[4px] w-fit">
              My Contact
            </h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <div className="relative cursor-pointer group w-fit text font-Chillax text-stone-400">
                <AnimatedLink title="hello@thienduc.xyz" />
              </div>
            </div>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <div className="relative cursor-pointer group w-fit text font-Chillax">
                <AnimatedLink title="+84 123 456 789" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-body-1 2xl:text-4xl text-stone-400 border-thinn px-[14px] py-[4px] w-fit">
              My Digital Spaces
            </h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              <div className="flex items-center space-x-2 font-Chillax">
                <Github color="#ffffff" />
                <AnimatedLink title="Github" />
              </div>
              <div className="flex items-center space-x-2 font-Chillax">
                <Facebook color="#ededed" strokeWidth={0.75} />
                <AnimatedLink title="Facebook" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
