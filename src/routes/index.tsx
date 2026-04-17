import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ItemList, SectionHeading, type ListItem } from "@/components/ItemList";

export const Route = createFileRoute("/")({
  component: Index,
});

const software: ListItem[] = [
  {
    title: "notedeck",
    description: "A minimalist markdown notes app for the web",
    date: "12 Mar 2026",
    emoji: "📝",
  },
  {
    title: "tinyform",
    description: "Build forms in seconds, no signup required",
    date: "02 Feb 2026",
    emoji: "📋",
  },
  {
    title: "swiftshelf",
    description: "Track the books you read with friends",
    date: "18 Nov 2025",
    emoji: "📚",
  },
  {
    title: "pulse.fm",
    description: "Indie radio stations, beautifully discovered",
    date: "04 Sep 2025",
    emoji: "📻",
  },
  {
    title: "snapcal",
    description: "Screenshot your calendar into a shareable image",
    date: "21 Jun 2025",
    emoji: "🗓️",
  },
  {
    title: "mintkit",
    description: "Open-source UI kit for personal sites",
    date: "10 Apr 2025",
    emoji: "🌱",
  },
];

function Index() {
  return (
    <PageShell>
      <section>
        <SectionHeading>Software</SectionHeading>
        <ItemList items={software} />
      </section>
    </PageShell>
  );
}
