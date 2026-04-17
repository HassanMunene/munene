import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ItemList, SectionHeading, type ListItem } from "@/components/ItemList";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Alex Carter" },
      { name: "description", content: "Essays on software, design, and craft." },
    ],
  }),
  component: Blog,
});

const posts: ListItem[] = [
  { title: "On building tiny tools", description: "Why small software still matters", date: "08 Mar 2026", emoji: "🧩" },
  { title: "The case for serif headings", description: "A love letter to old fonts", date: "21 Jan 2026", emoji: "🔤" },
  { title: "Notes from a slow year", description: "What I learned shipping less", date: "30 Dec 2025", emoji: "🍵" },
];

function Blog() {
  return (
    <PageShell>
      <SectionHeading>Blog</SectionHeading>
      <ItemList items={posts} />
    </PageShell>
  );
}
