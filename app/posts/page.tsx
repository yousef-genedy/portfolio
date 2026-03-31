import type { Metadata } from "next";
import Container from "@/components/Container";
import NoteCard from "@/components/NoteCard";
import PageHeader from "@/components/PageHeader";
import { getNotes } from "@/lib/content/queries";

export const metadata: Metadata = {
  title: "Posts",
  description: "Engineering posts on backend architecture, performance, and distributed systems.",
};

export default function PostsPage() {
  const posts = getNotes();

  return (
    <Container>
      <div className="space-y-10 py-14 md:py-20">
        <PageHeader
          eyebrow="Writing"
          title="Posts"
          description="Backend engineering posts, design notes, and implementation patterns."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <NoteCard key={post.slug} note={post} />
          ))}
        </div>
      </div>
    </Container>
  );
}

