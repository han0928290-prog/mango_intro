"use client";

import { useScrollY } from "./useParallax";

export default function Background() {
  const scrollY = useScrollY();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }}
        className="absolute -top-40 right-[-12%] h-[38rem] w-[38rem] rounded-full bg-mango/20 blur-[130px]"
      />
      <div
        style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }}
        className="absolute bottom-[-18%] left-[-12%] h-[32rem] w-[32rem] rounded-full bg-jade/15 blur-[130px]"
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
