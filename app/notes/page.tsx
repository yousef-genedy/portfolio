import type { Metadata } from "next";
import Container from "@/components/Container";
import NoteCard from "@/components/NoteCard";
import PageHeader from "@/components/PageHeader";
import { getNotes } from "@/lib/content/queries";

export const metadata: Metadata = {
  title: "Notes",
  description: "Engineering notes on backend architecture, performance, and distributed systems.",
};

export default function NotesPage() {
  const notes = getNotes();

  return (
	<Container>
	  <div className="space-y-10 py-14 md:py-20">
		<PageHeader
		  eyebrow="Writing"
		  title="Notes"
		  description="Short backend engineering notes, design ideas, and practical implementation patterns."
		/>
		<div className="grid gap-4 md:grid-cols-2">
		  {notes.map((note) => (
			<NoteCard key={note.slug} note={note} />
		  ))}
		</div>
	  </div>
	</Container>
  );
}

