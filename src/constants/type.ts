import { ReactPortal } from "react";
import { MotionValue } from "framer-motion";
import { Variants } from "framer-motion";

export type Dimension = {
  width: number;
  height: number;
};

export interface RevealLeftProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export interface RevealUpProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export type WordType = {
  children: ReactPortal | string;
  i?: number;
  range: number[];
  progress: MotionValue<number>;
};

export interface AnimateLinkProps {
  title: string;
  href?: string;
  target?: string;
}
export interface AnimateProps {
  title: string;
  animation: Variants;
  isHovered: boolean;
  href: string | undefined;
  target?: string;
}
