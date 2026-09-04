"use client";

import { useEffect, useRef, useState } from "react";

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Drifts an in-flow element based on its distance from the viewport centre,
 * so it settles into place as it scrolls through — not a raw scroll-linked offset.
 */
export function useParallax<T extends HTMLElement>(speed: number) {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reducedMotion()) return;

    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const delta = window.innerHeight / 2 - (rect.top + rect.height / 2);
        setOffset(delta * speed);
      }
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return { ref, offset };
}

/** Raw scroll position, throttled to animation frames — for fixed/pinned layers. */
export function useScrollY() {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (reducedMotion()) return;

    let raf = 0;
    const update = () => {
      setY(window.scrollY);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return y;
}
