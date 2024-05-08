import Button from "./Button";

const Form = () => {
  return (
    <div className="grid grid-cols-1 gap-x-20 md:grid-cols-12">
      <form
        method="POST"
        className="col-span-1 flex w-full flex-col items-start gap-y-8 sm:col-span-7 2xl:gap-y-12"
      >
        <div className="flex flex-col w-full">
          <label
            htmlFor="Name"
            className="text-link mb-1 2xl:mb-2 text-[#ece6d5]"
          >
            Your Name <span className="text-error-100 pl-[.25rem]">*</span>
          </label>
          <input
            type="text"
            className="rounded-xl max-w-[779px] w-full text-[#bfbcb5] text-xl font-semibold px-4 py-3 bg-transparent focus:bg-beige-600  border border-[#2f2f2d]"
            placeholder="Closum"
            id="Name"
            required
            name="Name"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="Email"
            className="text-link mb-1 2xl:mb-2 text-[#ece6d5]"
          >
            Email <span className="text-error-100 pl-[.25rem]">*</span>
          </label>
          <input
            type="email"
            className="rounded-xl max-w-[779px] w-full text-[#bfbcb5] text-xl font-semibold px-4 py-3 bg-transparent focus:bg-beige-600  border border-[#2f2f2d]"
            placeholder="closum@dev.com"
            id="Email"
            required
            name="Email"
          />
        </div>
        <div className="flex flex-col w-full mb-12">
          <label
            htmlFor="Message"
            className="text-link mb-1 2xl:mb-2 text-[#ece6d5]"
          >
            Message <span className="text-error-100 pl-[.25rem]">*</span>
          </label>
          <textarea
            name="Message"
            id="Message"
            className="pb-20 2xl:pb-32 rounded-xl text-[#bfbcb5] text-xl font-semibold px-4 py-3 bg-transparent focus:bg-beige-600  border border-[#2f2f2d]"
            required
            placeholder="Brief summary, your timeline, goals, etc."
          ></textarea>
        </div>
        <Button></Button>
      </form>
      <aside className="order-[-9999] text-link col-span-1 mb-16 flex w-fit flex-col gap-y-12 sm:col-span-3 md:order-[99999] md:mb-0">
        <div className="flex flex-col gap-y-3 md:gap-y-4">
          <h2 className="font-bold uppercase leading-none text-[#ece6d5]">
            Send me information via the address below
          </h2>
          <div className="flex flex-col gap-y-2">
            <a
              href="mailto:closum@dev.com"
              target="_blank"
              className="text-link font-medium leading-none text-[#bfbcb5]"
            >
              thienduc@dev.com
            </a>
            <a
              href="tel:+0123456789"
              target="_blank"
              className="text-link font-medium leading-none text-[#bfbcb5]"
            >
              +012 345 6789
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 md:flex md:gap-y-4">
          <h2 className="font-bold uppercase leading-none text-[#ece6d5]">
            socials
          </h2>
          <div className="flex flex-col gap-y-2">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-link font-medium leading-none text-[#bfbcb5]"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-link font-medium leading-none text-[#bfbcb5]"
            >
              Instagram
            </a>
          </div>
        </div>
        <img
          src="/assets/icon/logos/star.png"
          alt="starct"
          loading="lazy"
          className="lg:w-[345px] lg:h-[345px] w-[200px] h-[200px]"
        />
      </aside>
    </div>
  );
};

export default Form;
