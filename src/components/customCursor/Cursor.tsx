import { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const images = document.querySelectorAll("img");
    const h1s = document.querySelectorAll("h1");

    const cursorText = document.querySelector(
      ".cursor-text"
    ) as HTMLOrSVGImageElement;
    const h1Text = document.querySelector(".text-h1") as HTMLParagraphElement;

    const onMouseMove: EventListener = (e) => {
      const event = e as MouseEvent;

      const { clientX, clientY } = event;

      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseMoveText: EventListener = (e) => {
      const event = e as MouseEvent;
      const text = event.target as HTMLElement;

      if (text.classList.contains("view")) {
        gsap.to(cursor, { scale: 5 });
        h1Text.style.display = "block";
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveText = () => {
      gsap.to(cursor, { scale: 1 });
      h1Text.style.display = "none";
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

    h1s.forEach((texth1) => {
      texth1.addEventListener("mousemove", onMouseMoveText);
      texth1.addEventListener("mouseleave", onMouseLeaveText);
    });
  }, []);

  return (
    <div id="custom-cursor" className="md:custom-cursor">
      <span className="cursor-text">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="7"
          fill="#000000"
          className="bi bi-arrow-up-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
          />
        </svg>
      </span>
      <span className="text-h1"></span>
    </div>
  );
};

export default Cursor;
