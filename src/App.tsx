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
} from "./sections";
import { ReactLenis } from "@studio-freight/react-lenis";
import Preloader from "./components/Preloader";
import Cursor from "./components/customCursor/Cursor";

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
    <ReactLenis root>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Cursor />
          <Header />
          <Hero />
          <div className="bg-black relative z-20 overflow-x-clip rounded-3xl">
            <About />
            <Service />
            <Projects />
          </div>
          <Contact />
          <Footer />
        </>
      )}
    </ReactLenis>
  );
}

export default App;
