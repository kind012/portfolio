import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Header,
  Hero,
  About,
  Service,
  Projects,
  Contact,
  Footer,
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
          <div className="bg-white relative z-20 overflow-x-clip rounded-3xl">
            <About />
            <Service />
            <Projects />
          </div>
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
