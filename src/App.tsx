import About from "./layout/about";
import Header from "./layout/header";
import Intro from "./layout/intro";
import Projects from "./layout/projects";
import Contact from "./layout/contact";
import Service from "./layout/service";
import Footer from "./layout/footer";
import Cursor from "./components/customCursor/Cursor";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
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
          <Toaster position="bottom-right" />
          <Cursor />
          <Header />
          <Intro />
          <About />
          <Service />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </ReactLenis>
  );
}

export default App;
