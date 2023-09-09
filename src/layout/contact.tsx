import { useRef, FormEvent } from "react";
import SectionHeading from "../components/SectionHeading";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.init("YOUR_PUBLIC_KEY");
    emailjs.init("YOUR_TEMPLATE_ID");
    emailjs.init("YOUR_PUBLIC_KEY");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current!,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="my-[10%] px-5 md:px-10 xl:px-20 2xl:px-28" id="contact">
      <SectionHeading>Contact</SectionHeading>
      <div className="md:grid md:grid-cols-6 flex flex-col md:px-12 gap-20 mt-[50px]">
        <div className="col-span-4 ">
          <h3 className="max-w-lg font-semibold leading-tight 2xl:max-w-3xl text-heading-3 2xl:text-7xl">
            Have an something say?
          </h3>
          <p className="mt-3 max-w-md 2xl:max-w-2xl text-body-5 2xl:text-4xl mb-[50px] font-ClashGrotesk ">
            Let's send message for me.
          </p>
          <form onSubmit={sendEmail} ref={form}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="to_name"
                  id="name"
                  placeholder=" "
                  required
                  className="peer block w-full appearance-none border-0 border-b border-[#000000]  bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  placeholder=" "
                  required
                  className="peer block w-full appearance-none border-0 border-b border-[#000000]  bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your email
                </label>
              </div>
              <div className="relative z-0 sm:col-span-2">
                <textarea
                  name="message"
                  placeholder=" "
                  rows={5}
                  className="peer block w-full appearance-none border-0 border-b border-[#000000]  bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your message
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 duration-200 border button group hover:border-primary-600 hover:bg-transparent"
            >
              <span className="group-hover:text-black">Send Message</span>
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 col-span-2 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3">
            <h4 className="font-semibold text-body-1 2xl:text-4xl">
              My Contact
            </h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="mailto:hello@thienduc.xyz"
                className="relative cursor-pointer group w-fit"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text font-ClashGrotesk">
                  hello@thienduc.xyz
                </span>
                <span className="absolute bottom-0 left-0 h-[0.12rem] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-body-1 2xl:text-4xl">
              My Social
            </h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="https://github.com/kind012"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 group "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--mdi"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  style={{ color: "rgb(102, 102, 102)" }}
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  ></path>
                </svg>
                <div className="relative">
                  <span className="font-ClashGrotesk">Github</span>
                  <span className="absolute bottom-0 left-0 h-[0.12rem] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://github.com/kind012"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 group "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--mdi"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  style={{ color: "rgb(102, 102, 102)" }}
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  ></path>
                </svg>
                <div className="relative">
                  <span className="font-ClashGrotesk">Facebook</span>
                  <span className="absolute bottom-0 left-0 h-[0.12rem] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full"></span>
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
