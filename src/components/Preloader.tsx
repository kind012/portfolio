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
        setCounter(counterRef?.current + 1);
        const t1 = gsap.timeline();
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
      } else {
        clearInterval(count);
      }
    }, 25);
  }, []);

  return (
    <div className="preload">
      <div className="loading">
        <div className="follow"></div>
        <div
          className="pace hide"
          style={{ width: counterRef.current + "%" }}
        ></div>
        <div className="pace-progess hide">{counter}%</div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Preloader;
