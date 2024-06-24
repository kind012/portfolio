import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Header,
  Hero,
  About,
  Service,
  Projects,
  Contact,
} from "./components/sections";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setLoading] = useState<boolean>(true);

  const finishedLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  };

  useEffect(() => {
    finishedLoading();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Header />
          <Hero />
          <div className="bg-[#080807] relative z-[99999] rounded-2xl -mt-5">
            <About />
            <Service />
            <Projects />
          </div>
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
