import Link from "next/link";

const quickLinks = [
  { href: "/#fruits", label: "精選水果" },
  { href: "/#seasons", label: "四季時令" },
  { href: "/#why", label: "為什麼推薦" },
  { href: "/blog", label: "水果札記" },
];

const socials = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-12">
        <div className="sm:col-span-5">
          <span className="font-display text-2xl text-cream">台灣好水果</span>
          <p className="mt-4 max-w-xs text-sm leading-6 text-cream/60">
            用心紀錄寶島四季鮮果，走進台灣豐饒物產與產地故事。
          </p>
        </div>

        <div className="sm:col-span-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-cream/40">導覽</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-cream/70">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="w-fit transition-colors hover:text-cream">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="sm:col-span-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-cream/40">追蹤</h4>
          <div className="mt-4 flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-cream/70">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="w-fit transition-colors hover:text-cream">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-6 text-center font-mono text-[11px] uppercase tracking-widest text-cream/30">
        © 2026 台灣好水果 — Made with care in Taiwan
      </div>
    </footer>
  );
}
