import About from "./layout/about";
import Header from "./layout/header";
import Intro from "./layout/intro";
import Projects from "./layout/projects";
import Contact from "./layout/contact";
import Skills from "./layout/skills";
import Footer from "./layout/footer";
import Cursor from "./components/customCursor/Cursor";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";

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
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </ReactLenis>
  );
}

export default App;
