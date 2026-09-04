import Image from "next/image";
import Parallax from "./components/Parallax";
import LuckyDraw from "./components/LuckyDraw";
import WelcomeGate from "./components/WelcomeGate";

type Fruit = {
  image: string;
  name: string;
  enName: string;
  season: string;
  origin: string;
  desc: string;
  featured?: boolean;
};

const fruits: Fruit[] = [
  {
    image: "/images/mango.jpg",
    name: "芒果",
    enName: "Mango",
    season: "5 – 9 月",
    origin: "台南玉井・南投",
    desc: "愛文、金煌各有風情，果肉細緻香甜多汁，被譽為「果中之王」。",
    featured: true,
  },
  {
    image: "/images/pineapple.jpg",
    name: "鳳梨",
    enName: "Pineapple",
    season: "3 – 8 月",
    origin: "高雄大樹・台南關廟",
    desc: "金鑽鳳梨甜度高、纖維細緻，果心也香甜可口，全果都是精華。",
  },
  {
    image: "/images/guava.jpg",
    name: "芭樂",
    enName: "Guava",
    season: "全年皆產",
    origin: "高雄燕巢",
    desc: "珍珠芭樂清脆多汁，維生素 C 含量傲視群果，四季都能品嚐。",
  },
  {
    image: "/images/wax-apple.jpg",
    name: "蓮霧",
    enName: "Wax Apple",
    season: "12 – 4 月",
    origin: "屏東林邊・南投",
    desc: "黑金剛蓮霧色澤深紅、清甜爽脆，是冬季限定的夢幻美味。",
    featured: true,
  },
  {
    image: "/images/lychee.jpg",
    name: "荔枝",
    enName: "Lychee",
    season: "5 – 7 月",
    origin: "高雄大樹・台中",
    desc: "玉荷包晶瑩剔透，香氣濃郁、果肉Q彈，初夏限定的甜蜜滋味。",
  },
  {
    image: "/images/watermelon.jpg",
    name: "西瓜",
    enName: "Watermelon",
    season: "5 – 8 月",
    origin: "雲林・嘉義",
    desc: "夏日消暑聖品，多汁清甜，切開瞬間就是滿滿的沁涼幸福。",
  },
  {
    image: "/images/grape.jpg",
    name: "葡萄",
    enName: "Grape",
    season: "6 – 8 月",
    origin: "彰化二林",
    desc: "巨峰葡萄顆粒飽滿、皮薄多汁，酸甜比例恰到好處。",
    featured: true,
  },
  {
    image: "/images/banana.jpg",
    name: "香蕉",
    enName: "Banana",
    season: "全年皆產",
    origin: "高雄旗山",
    desc: "香氣濃郁、口感綿密，外銷日本超過半世紀的國民水果。",
  },
  {
    image: "/images/custard-apple.jpg",
    name: "釋迦",
    enName: "Custard Apple",
    season: "9 – 12 月",
    origin: "台東",
    desc: "表皮鱗片狀，果肉綿密香甜如冰淇淋，台東最引以為傲的特產。",
  },
];

const seasons = [
  { label: "春", en: "Spring", months: "3 – 5 月", picks: "鳳梨、芭樂", color: "text-jade" },
  {
    label: "夏",
    en: "Summer",
    months: "6 – 8 月",
    picks: "芒果、荔枝、西瓜、葡萄、香蕉",
    color: "text-mango",
  },
  { label: "秋", en: "Autumn", months: "9 – 11 月", picks: "釋迦、香蕉、芭樂", color: "text-guava" },
  { label: "冬", en: "Winter", months: "12 – 2 月", picks: "蓮霧、香蕉、芭樂", color: "text-cream" },
];

const features = [
  {
    title: "得天獨厚的氣候",
    desc: "位處亞熱帶與熱帶交界，全年溫暖多雨，孕育出全世界少見的多樣水果生態。",
  },
  {
    title: "精緻農業技術",
    desc: "農民世代鑽研品種改良與栽培工法，讓每一顆水果的甜度與品質年年進化。",
  },
  {
    title: "產地直送新鮮",
    desc: "從果園到餐桌，最短時間送達消費者手中，鎖住當季最鮮甜的滋味。",
  },
];

export default function Home() {
  return (
    <main id="top" className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-32 px-6 pb-32 pt-14 sm:pt-24">
      {/* hero */}
        <section className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <WelcomeGate />
            <span className="mt-3 block font-mono text-xs uppercase tracking-widest text-mango">
              Taiwan Fruit Almanac ・ 台灣水果曆
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl">
              島嶼盛產
              <br />
              <span className="text-mango">四季</span>甜蜜
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-cream/70 sm:text-lg">
              從高山到平原，從熱帶到亞熱帶氣候，孕育出一年四季都吃不完的滋味——
              這是一份屬於台灣的水果曆。
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#fruits"
                className="inline-flex items-center gap-3 border border-cream/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                探索精選水果 <span aria-hidden>→</span>
              </a>
              <a
                href="#seasons"
                className="font-mono text-xs uppercase tracking-widest text-cream/60 underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream"
              >
                查看四季時令
              </a>
              <LuckyDraw />
            </div>

            <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-cream/10 pt-8 font-mono text-xs uppercase tracking-widest text-cream/50">
              <div>
                <dt className="inline text-cream">09</dt> 精選水果
              </div>
              <div>
                <dt className="inline text-cream">04</dt> 季節時令
              </div>
              <div>
                <dt className="inline text-cream">12</dt> 月月鮮果
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <Parallax
              speed={0.06}
              className="relative mx-auto w-full max-w-xs rotate-2 rounded-2xl border border-cream/15 bg-panel/50 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl sm:max-w-sm lg:max-w-xs"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-cream/50">
                本月當令 ・ Featured
              </span>
              <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/mango.jpg"
                  alt="芒果"
                  fill
                  sizes="320px"
                  priority
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-display text-3xl">芒果</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-cream/50">
                Mango ・ 5–9月 ・ 台南玉井
              </p>
            </Parallax>
          </div>
        </section>

        {/* fruit index */}
        <section id="fruits" className="flex flex-col gap-10">
          <div className="flex items-baseline justify-between gap-6 border-b border-cream/10 pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-mango">01 ・ Fruits</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">當令水果索引</h2>
            </div>
            <span className="hidden font-mono text-xs uppercase tracking-widest text-cream/40 sm:block">
              9 Varieties
            </span>
          </div>

          <div className="flex flex-col divide-y divide-cream/10">
            {fruits.map((fruit, i) => (
              <article
                key={fruit.name}
                className={`group flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-6 ${
                  fruit.featured
                    ? "rounded-2xl border-t-0 border-cream/10 bg-panel/40 px-6 -mx-6 backdrop-blur-md sm:px-6"
                    : ""
                }`}
              >
                <Parallax
                  speed={0.04}
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-sm sm:shrink-0 ${
                    fruit.featured
                      ? "sm:w-48 md:w-64 lg:w-72"
                      : "sm:w-32 md:w-40 lg:w-48"
                  }`}
                >
                  <Image
                    src={fruit.image}
                    alt={`${fruit.name}（${fruit.enName}）`}
                    fill
                    sizes={
                      fruit.featured
                        ? "(min-width: 1024px) 288px, (min-width: 768px) 256px, (min-width: 640px) 192px, 100vw"
                        : "(min-width: 1024px) 192px, (min-width: 768px) 160px, (min-width: 640px) 128px, 100vw"
                    }
                    className={`object-cover transition-all duration-500 ${
                      fruit.featured ? "" : "grayscale group-hover:grayscale-0"
                    }`}
                  />
                </Parallax>

                <div className="flex items-baseline gap-3 sm:contents">
                  <span className="font-mono text-sm text-cream/40 sm:w-8 sm:shrink-0">
                    0{i + 1}
                  </span>

                  <div className="sm:w-44 sm:shrink-0 md:w-56">
                    <div className="flex items-baseline gap-2">
                      <h3
                        className={`font-display ${fruit.featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}
                      >
                        {fruit.name}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-cream/40">
                        {fruit.enName}
                      </span>
                    </div>
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-cream/40">
                      {fruit.season} ・ {fruit.origin}
                    </p>
                  </div>
                </div>

                <p className="max-w-md text-sm leading-6 text-cream/70 sm:min-w-0 sm:max-w-none sm:flex-1">
                  {fruit.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* seasons timeline */}
        <section id="seasons" className="flex flex-col gap-10">
          <div className="border-b border-cream/10 pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-jade">02 ・ Seasons</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">四季時令指南</h2>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 sm:divide-x sm:divide-cream/10">
            {seasons.map((s) => (
              <div key={s.label} className="flex flex-col gap-4 sm:px-8 sm:first:pl-0">
                <span className={`font-display text-6xl ${s.color}`}>{s.label}</span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-cream/40">
                  {s.en} ・ {s.months}
                </span>
                <div className="h-px w-8 bg-cream/20" />
                <p className="text-sm leading-6 text-cream/70">{s.picks}</p>
              </div>
            ))}
          </div>
        </section>

        {/* why */}
        <section id="why" className="grid gap-10 border-b border-cream/10 pb-16 sm:grid-cols-12 sm:gap-6">
          <div className="sm:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-guava">03 ・ Why</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              為什麼台灣水果
              <br />
              值得世界驕傲
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-cream/10 sm:col-span-8">
            {features.map((f, i) => (
              <div key={f.title} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8">
                <span className="font-mono text-sm text-cream/30 sm:w-10">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl">{f.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-cream/70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* cta */}
        <section className="relative flex flex-col gap-8 overflow-hidden sm:flex-row sm:items-end sm:justify-between">
          <Parallax
            speed={0.08}
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-16 select-none font-display text-[14rem] leading-none text-cream/[0.03]"
          >
            甜
          </Parallax>
          <div className="relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-mango">Taste It</span>
            <h2 className="mt-4 max-w-xl font-display text-3xl sm:text-5xl">
              準備好，品嚐台灣的甜蜜了嗎？
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-cream/70 sm:text-base">
              走一趟在地水果攤或市集，親自感受最新鮮的台灣風土滋味。
            </p>
          </div>
          <a
            href="#fruits"
            className="relative z-10 inline-flex w-fit items-center gap-3 border border-cream/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
          >
            回到精選水果 <span aria-hidden>→</span>
          </a>
      </section>
    </main>
  );
}
