import { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const images = document.querySelectorAll("img");
    const cursorText = document.querySelector(".cursor-text") as HTMLElement;

    const onMouseMove: EventListener = (e) => {
      const event = e as MouseEvent;

      const { clientX, clientY } = event;

      gsap.to(cursor, { x: clientX, y: clientY });
    };
    const onMouseMoveImage: EventListener = (e) => {
      const event = e as MouseEvent;
      const image = event.target as HTMLElement;

      if (image.classList.contains("view")) {
        gsap.to(cursor, { scale: 5 });
        cursorText.style.display = "block";
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };
    const onMouseLeaveImage = () => {
      gsap.to(cursor, { scale: 1 });
      cursorText.style.display = "none";
    };
    document.addEventListener("mousemove", onMouseMove);
    images.forEach((image) => {
      image.addEventListener("mousemove", onMouseMoveImage);
      image.addEventListener("mouseleave", onMouseLeaveImage);
    });
  }, []);
  return (
    <div id="custom-cursor" className="md:custom-cursor">
      <span className="cursor-text">View</span>
    </div>
  );
};

export default Cursor;
