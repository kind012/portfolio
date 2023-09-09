import { useRef, useEffect } from "react";
import { gsap } from "gsap";

// interface PreloaderProps {
//   containedRef: RefObject<HTMLElement>;
// }

const Preloader = () => {
  const loadingtext = useRef<HTMLElement | null>(null);
  const pace = useRef<HTMLElement | null>(null);

  useEffect(() => {
    loadingtext.current = document.querySelector(".loading-text");
    pace.current = document.querySelector(".pace");

    gsap
      .timeline()
      .add("p")
      .to(
        pace.current,
        {
          transform: "scale(10, 1)",
          duration: 4,
        },
        "+=.2"
      )
      .to(
        pace.current,
        {
          duration: 1,
          height: "100%",
        },
        "-=2.5"
      )
      .to(
        loadingtext.current,
        {
          delay: 0.2,
          duration: 3,
          opacity: 0,
          yPercent: -400,
          ease: "BezierEasing(0.19,1,0.22,1)",
        },
        "p"
      );
  }, []);

  return (
    <div id="preloader" className="preload">
      <div className="loading-text">LOADING</div>
      <div className="pace">
        <div className="pace-progess"></div>
      </div>
    </div>
  );
};

export default Preloader;
