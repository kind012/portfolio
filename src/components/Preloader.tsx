import { useEffect, useRef, useState } from "react";
import { gsap, Expo, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

const Preloader = () => {
  const [counter, setCounter] = useState<number>(0);

  const counterRef = useRef<number>(0);
  counterRef.current = counter;
  useEffect(() => {
    const count = setInterval(() => {
      if (counterRef.current < 100) {
        setCounter(counterRef.current + 1);
        reveal();
      } else {
        clearInterval(count);
      }
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", {
        opacity: 0,
        duration: 0.3,
      })
      .to(".hide", {
        display: "none",
        duration: 0.3,
      })
      .to(".follow", {
        height: "100%",
        duration: 0.7,
        delay: 0.5,
        ease: Expo.easeOut,
      })
      .to(".content", {
        width: "100%",
        ease: Expo.easeOut,
        duration: 0.7,
      });
  };

  return (
    <div className="preload">
      <div className="loading">
        <div className="follow"></div>
        <div className="pace hide" style={{ width: counter + "%" }}></div>
        <div className="pace-progess hide">{counter}%</div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Preloader;

// const pace = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     loadingtext.current = document.querySelector(".loading-text");
//     pace.current = document.querySelector(".pace");

//     gsap
//       .timeline()
//       .add("p")
//       .to(
//         pace.current,
//         {
//           transform: "scale(10, 1)",
//           duration: 4,
//         },
//         "+=.2"
//       )
//       .to(
//         pace.current,
//         {
//           duration: 1,
//           height: "100%",
//         },
//         "-=2.5"
//       )
//       .to(
//         loadingtext.current,
//         {
//           delay: 0.2,
//           duration: 3,
//           opacity: 0,
//           yPercent: -400,
//           ease: "BezierEasing(0.19,1,0.22,1)",
//         },
//         "p"
//       );
//   }, []);
