import Link from "next/link";
import type { PostEntry } from "@/lib/content/types";

type PostCardProps = {
  post: PostEntry;
};

export default function PostCard({ post }: PostCardProps) {
  const postHref = `/posts/${post.slug}`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-[0_14px_30px_-24px_rgba(56,189,248,0.4)]">
      <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
        {post.formattedDate} <span className="mx-1 text-zinc-700">|</span> {post.readingTime}
      </p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-100">{post.title}</h2>
      <p className="mt-2 text-sm leading-7 text-zinc-300">{post.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-zinc-700 bg-zinc-950/80 px-2.5 py-1 text-xs text-zinc-400">
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={postHref}
        className="mt-5 inline-block text-sm text-zinc-200 transition-colors hover:text-sky-300"
      >
        Read post
      </Link>
    </article>
  );
}
