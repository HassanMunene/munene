import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ItemList, SectionHeading, type ListItem } from "@/components/ItemList";

export const Route = createFileRoute("/lists")({
  head: () => ({
    meta: [
      { title: "Lists — Alex Carter" },
      { name: "description", content: "Curated lists." },
    ],
  }),
  component: Lists,
});

const items: ListItem[] = [
  { title: "Tools I use daily", description: "My current setup", date: "2026", emoji: "🛠️" },
  { title: "Favorite design blogs", description: "Long-running inspiration", date: "2025", emoji: "🎨" },
  { title: "Indie apps I love", description: "Small software, big care", date: "2025", emoji: "💎" },
];

function Lists() {
  return (
    <PageShell>
      <SectionHeading>Lists</SectionHeading>
      <ItemList items={items} />
    </PageShell>
  );
}
