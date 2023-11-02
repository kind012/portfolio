import { useState } from "react";

interface HoverTextProps {
  children: React.ReactNode;
}
const HoverText = ({ children }: HoverTextProps) => {
  const [isHover, setHover] = useState<boolean>(false);

  return (
    <div
      className={isHover ? "text-stone-100" : "text-stone-400"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </div>
  );
};

export default HoverText;
