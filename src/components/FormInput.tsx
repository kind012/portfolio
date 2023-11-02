import { useRef, FormEvent } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const FormInput = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.init("YOUR_PUBLIC_KEY");
    emailjs.init("YOUR_TEMPLATE_ID");
    emailjs.init("YOUR_PUBLIC_KEY");

    emailjs
      ?.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current!,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result?.text);
          toast.success("Send message successfully");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} ref={form}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
        <div className="relative z-0">
          <input
            type="text"
            name="to_name"
            id="name"
            placeholder=" "
            required
            className="peer block w-full appearance-none border-0 border-b border-stone-400 text-stone-300 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-stone-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
          >
            Your name
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="text"
            name="from_name"
            id="email"
            placeholder=" "
            required
            className="peer block w-full appearance-none border-0 border-b border-stone-400 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 text-stone-300"
          />
          <label
            htmlFor="email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-stone-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
          >
            Your email
          </label>
        </div>
        <div className="relative z-0 sm:col-span-2">
          <textarea
            name="message"
            id="message"
            placeholder=" "
            rows={5}
            className="peer block w-full appearance-none border-0 border-b border-stone-400  bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 text-stone-300"
            required
          ></textarea>
          <label
            htmlFor="message"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-stone-300"
          >
            Your message
          </label>
        </div>
      </div>

      <button type="submit" className="mt-10 button">
        <span className="text">Let's Talk.</span>
      </button>
    </form>
  );
};

export default FormInput;
