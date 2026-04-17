import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ItemList, SectionHeading, type ListItem } from "@/components/ItemList";

export const Route = createFileRoute("/reading")({
  head: () => ({
    meta: [
      { title: "Reading — Alex Carter" },
      { name: "description", content: "Books I'm reading." },
    ],
  }),
  component: Reading,
});

const books: ListItem[] = [
  { title: "The Pragmatic Programmer", description: "Hunt & Thomas", date: "Reading", emoji: "📘" },
  { title: "Designing Data-Intensive Applications", description: "Martin Kleppmann", date: "2025", emoji: "📗" },
  { title: "Shape Up", description: "Ryan Singer", date: "2025", emoji: "📙" },
];

function Reading() {
  return (
    <PageShell>
      <SectionHeading>Reading</SectionHeading>
      <ItemList items={books} />
    </PageShell>
  );
}
