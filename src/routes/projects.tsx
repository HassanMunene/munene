import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ItemList, SectionHeading, type ListItem } from "@/components/ItemList";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Alex Carter" },
      { name: "description", content: "Side projects and experiments." },
    ],
  }),
  component: Projects,
});

const items: ListItem[] = [
  { title: "Lumen Editor", description: "A focus-mode writing tool", date: "2025", emoji: "✍️" },
  { title: "Habit Atlas", description: "Visualize your daily habits", date: "2024", emoji: "🌍" },
  { title: "Coffee Log", description: "Track every cup you brew", date: "2024", emoji: "☕" },
  { title: "Wave CLI", description: "Tiny terminal music visualizer", date: "2023", emoji: "🌊" },
];

function Projects() {
  return (
    <PageShell>
      <SectionHeading>Projects</SectionHeading>
      <ItemList items={items} />
    </PageShell>
  );
}
