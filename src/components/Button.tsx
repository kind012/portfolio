import { ArrowRight } from "lucide-react";

const Button = () => {
  return (
    <button className="button">
      <span className="uppercase text-link font-bold"> Let't go it</span>
      <ArrowRight className="w-5 h-5 items-center svg" />
    </button>
  );
};

export default Button;
