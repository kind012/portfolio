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

function App() {
  const [isLoading, setLoading] = useState<boolean>(true);

  const finishedLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  };

  useEffect(() => {
    finishedLoading();
  }, []);

  return (
    <ReactLenis root>
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
          <Cursor />
          <Header />
          <Intro />
          <About data-scroll="about" />
          <Skills />
          <Projects data-scroll="project" />
          <Contact data-scroll="contact" />
          <Footer />
        </>
      )}
    </ReactLenis>
  );
}

export default App;
