import {
  Code,
  DraftingCompass,
  Fan,
  Flower,
  PackagePlus,
  Plus,
  Sparkle,
} from "lucide-react";
import { texts } from "../constants/data";
import RevealUp from "../components/reveal/RevealUp";

const Intro = () => {
  return (
    <section
      id="intro"
      className="mx-16 mt-16 bg-black rounded-[40px] text-white pt-9 lg:mb-[109px] h-[806px] max-w-[1408px] w-full relative"
    >
      <div className="px-8 py-6 font-NeueMontreal">
        <div className="text-[88px] font-medium leading-[96px]">
          <RevealUp>
            <h1 className="uppercase ml-[64px]">{texts[0]}</h1>
          </RevealUp>
          <div className="flex flex-row gap-5">
            <RevealUp>
              <h1 className="uppercase ml-[110px]">{texts[1]}</h1>
            </RevealUp>
            <div className="flex flex-col gap-2">
              <RevealUp>
                <div className="flex flex-row gap-3 rounded-full border px-2 py-2 max-w-[470px] w-full h-[98px] items-center">
                  <Code color="#fafafa" className="w-[82px] h-[82px]" />
                  <h1 className="uppercase">coding</h1>
                </div>
              </RevealUp>
              <RevealUp>
                <div className="flex flex-row gap-3 rounded-full border px-2 py-2 max-w-[612px] w-full h-[98px] items-center ml-7">
                  <PackagePlus color="#fff" className="w-[82px] h-[82px]" />
                  <h1 className="uppercase">creativity</h1>
                </div>
              </RevealUp>
              <RevealUp>
                <div className="flex flex-row gap-3 rounded-full border px-2 py-2 items-center ml-14 max-w-[440px] w-full">
                  <DraftingCompass color="#fff" className="w-[82px] h-[82px]" />
                  <h1 className="uppercase">design</h1>
                </div>
              </RevealUp>
            </div>
          </div>
        </div>
        <div className="pt-[73px] ml-[633px]">
          <RevealUp>
            <div className="flex flex-col gap-[17px]">
              <div className="flex flex-wrap gap-[9px] items-center  text-center">
                <h3 className="uppercase text-sm font-semibold font-XSpace">
                  dush
                </h3>
                <span>[du-sh]</span>
              </div>
              <p className="text-lg max-w-[382px] w-full font-medium">
                I create elevating digital experiences that inspire and connect
                with people through development and design.
              </p>
            </div>
          </RevealUp>
        </div>
        <div className="flex flex-col gap-[137px] absolute max-w-[560px] w-full h-[500px] top-36">
          <div className="w-[420px] h-[420px]">
            <img
              src="/assets/images/shape-absctract.png"
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-row justify-between">
            <span className="font-normal text-xs">_HELLO</span>
            <div className="flex flex-wrap gap-2">
              <Plus color="#fafafa" className="w-4 h-4" />
              <Fan color="#fafafa" className="w-4 h-4" />
              <Flower color="#fafafa" className="w-4 h-4" />
              <Sparkle color="#fafafa" className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-[71px]">
          <div className="flex flex-row gap items-center gap-28">
            <span className="text-xs font-normal">{texts[2]}</span>
            <span className="text-xs font-normal">{texts[3]}</span>
            <span className="text-xs font-normal">{texts[4]}</span>
            <span className="text-xs font-normal">{texts[5]}</span>
          </div>
          <span className="text-xs font-normal">© 2024 Duckie</span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
