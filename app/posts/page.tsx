import type { Metadata } from "next";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import PageHeader from "@/components/PageHeader";
import { getPosts } from "@/lib/content/queries";

export const metadata: Metadata = {
  title: "Posts",
  description: "Engineering posts on backend architecture, performance, and distributed systems.",
};

export default function PostsPage() {
  const posts = getPosts();

  return (
    <Container>
      <div className="space-y-10 pb-14 pt-8 md:pb-20 md:pt-10">
        <PageHeader
          title="Posts"
          description="Software engineering posts, design notes, and implementation patterns."
        />
        {posts.length === 0 ? (
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-sm text-zinc-300">
            No posts published yet.
          </article>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

