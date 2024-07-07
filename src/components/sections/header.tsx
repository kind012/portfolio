import { links } from "../../constants/data";
import { AnimatedLink } from "../transformWordwithTag/AnimatedLink";

const Header = () => {
  return (
    <header className="px-5">
      <h1 className="text-3xl lg:py-0 py-4 lg:text-[9.1rem] font-bold uppercase text-[#c2bba5] leading-[1]">
        frontenddeveloper
      </h1>
      <div className="flex lg:flex-row flex-col items-center justify-between mb-14">
        <div className="flex flex-row gap-x-12">
          <p className="text-sm font-medium text-white">(+84)123-456-789</p>
          <p className="text-sm font-medium text-white">
            thienducdev@gmail.com
          </p>
        </div>
        <span className="block text-sm font-medium text-white">@2024</span>
        <nav className="lg:flex items-center gap-x-12 hidden">
          {links.map((link, i) => {
            return (
              <div
                className="relative group md:inline-block lg:block hidden"
                key={i}
              >
                <AnimatedLink title={link.title} href={link.href} />
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
