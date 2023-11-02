import { useEffect } from "react";
import { gsap } from "gsap";
import { MoveUpRight } from "lucide-react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const images = document.querySelectorAll("img");
    const p = document.querySelectorAll("p");

    const cursorText = document.querySelector(
      ".cursor-text"
    ) as HTMLOrSVGImageElement;
    const pText = document.querySelector(".text-p") as HTMLParagraphElement;

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
        pText.style.display = "block";
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveText = () => {
      gsap.to(cursor, { scale: 1 });
      pText.style.display = "none";
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

    p.forEach((textp) => {
      textp.addEventListener("mousemove", onMouseMoveText);
      textp.addEventListener("mouseleave", onMouseLeaveText);
    });
  }, []);

  return (
    <div id="custom-cursor" className="md:custom-cursor">
      <span className="cursor-text">
        <MoveUpRight className="object-cover w-2 h-2" />
      </span>
      <span className="text-p"></span>
    </div>
  );
};

export default Cursor;
