"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#fruits", label: "精選水果" },
  { href: "/#seasons", label: "四季時令" },
  { href: "/#why", label: "為什麼推薦" },
  { href: "/blog", label: "水果札記" },
  { href: "/game", label: "接芒果小遊戲" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-lg text-cream">台灣好水果</span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-cream/40">
            Taiwan Fruit Almanac
          </span>
        </Link>

        <div className="hidden gap-10 font-mono text-xs uppercase tracking-widest text-cream/60 sm:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-cream">
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="開啟選單"
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] sm:hidden"
        >
          <span
            className={`h-px w-5 bg-cream transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span className={`h-px w-5 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-5 bg-cream transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream/10 px-6 py-6 sm:hidden">
          <div className="flex flex-col gap-5 font-mono text-xs uppercase tracking-widest text-cream/70">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-fit hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
