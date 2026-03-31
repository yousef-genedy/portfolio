import Link from "next/link";
import type { NoteEntry } from "@/lib/content/types";

type NoteCardProps = {
  note: NoteEntry;
};

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors hover:border-zinc-700">
      <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">{note.date ?? "Draft"}</p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-100">{note.title}</h2>
      <p className="mt-2 text-sm leading-7 text-zinc-300">{note.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/posts/${note.slug}`} className="mt-4 inline-block text-sm text-zinc-200 hover:text-sky-300">
        Read post
      </Link>
    </article>
  );
}
