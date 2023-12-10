import { useState } from "react";

interface HoverIconProps {
  children: React.ReactNode;
}
const HoverIcon = ({ children }: HoverIconProps) => {
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

export default HoverIcon;
