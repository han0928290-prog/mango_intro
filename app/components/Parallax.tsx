"use client";

import { useParallax } from "./useParallax";

type ParallaxProps = {
  speed?: number;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Parallax({ speed = 0.1, style, children, ...rest }: ParallaxProps) {
  const { ref, offset } = useParallax<HTMLDivElement>(speed);

  return (
    <div ref={ref} style={{ ...style, transform: `translate3d(0, ${offset}px, 0)` }} {...rest}>
      {children}
    </div>
  );
}
