import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Hero,
  About,
  Service,
  Projects,
  Contact,
  Header,
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
          <About />
          <Service />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
