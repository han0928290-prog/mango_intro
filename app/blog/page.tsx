import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "水果札記｜台灣好水果",
  description: "台灣好水果的部落格，記錄水果背後的品種知識、產地故事與生活妙用。",
};

export default function BlogIndex() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 pb-32 pt-14 sm:pt-24">
      <div className="border-b border-cream/10 pb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-mango">Journal ・ 水果札記</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">水果札記</h1>
        <p className="mt-4 max-w-lg text-sm leading-6 text-cream/70 sm:text-base">
          本期主題：芒果。從品種挑選、產地故事到餐桌實用技巧，帶你更認識這顆台灣夏天的代表水果。
        </p>
      </div>

      <div className="flex flex-col divide-y divide-cream/10">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-6"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm sm:w-40 sm:shrink-0 md:w-48">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(min-width: 640px) 192px, 100vw"
                className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-cream/40">
                <span>0{i + 1}</span>
                <span className="text-mango">{post.tag}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl transition-colors group-hover:text-mango sm:text-3xl">
                {post.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-cream/70">{post.excerpt}</p>
            </div>

            <span
              aria-hidden
              className="font-mono text-xs uppercase tracking-widest text-cream/40 transition-colors group-hover:text-cream sm:shrink-0"
            >
              閱讀 →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
