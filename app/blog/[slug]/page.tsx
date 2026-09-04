import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title}｜水果札記`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 pb-32 pt-14 sm:pt-24">
      <Link
        href="/blog"
        className="w-fit font-mono text-xs uppercase tracking-widest text-cream/60 transition-colors hover:text-cream"
      >
        ← 回到水果札記
      </Link>

      <div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-cream/40">
          <span className="text-mango">{post.tag}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{post.title}</h1>
      </div>

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col gap-6 text-base leading-8 text-cream/80">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="border-t border-cream/10 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 border border-cream/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
        >
          瀏覽更多文章 <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}
