import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/ItemList";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — Alex Carter" },
      { name: "description", content: "A timeline of milestones." },
    ],
  }),
  component: Timeline,
});

const events = [
  { year: "2026", text: "Launched notedeck — a minimalist markdown notes app." },
  { year: "2025", text: "Spoke at FrontConf about progressive web apps." },
  { year: "2024", text: "Open-sourced mintkit, a UI kit for personal sites." },
  { year: "2023", text: "Joined Acme Labs as Senior Frontend Engineer." },
  { year: "2020", text: "Moved to San Francisco, started at Northwind." },
  { year: "2018", text: "First full-time engineering role at Bluewave Studio." },
];

function Timeline() {
  return (
    <PageShell>
      <SectionHeading>Timeline</SectionHeading>
      <ol className="mt-8 space-y-5">
        {events.map((e) => (
          <li key={e.year} className="flex gap-4">
            <div className="font-display w-16 shrink-0 text-lg font-bold text-accent-green">
              {e.year}
            </div>
            <div className="flex-1 border-l border-border pl-4 text-[15px] text-foreground">
              {e.text}
            </div>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
