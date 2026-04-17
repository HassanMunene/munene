import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/ItemList";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Alex Carter" },
      { name: "description", content: "Professional work history." },
    ],
  }),
  component: Work,
});

const jobs = [
  {
    role: "Senior Frontend Engineer",
    company: "Acme Labs",
    period: "2023 — Present",
    summary: "Lead the design system and mobile web platform for millions of users.",
  },
  {
    role: "Frontend Engineer",
    company: "Northwind",
    period: "2020 — 2023",
    summary: "Shipped the customer dashboard and rebuilt the onboarding flow.",
  },
  {
    role: "Software Engineer",
    company: "Bluewave Studio",
    period: "2018 — 2020",
    summary: "Built mobile apps for fintech and logistics clients.",
  },
];

function Work() {
  return (
    <PageShell>
      <SectionHeading>Work</SectionHeading>
      <div className="mt-8 space-y-8">
        {jobs.map((j) => (
          <article key={j.company} className="border-l-2 border-accent-green pl-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-foreground">
                {j.role} <span className="text-muted-foreground">· {j.company}</span>
              </h3>
              <span className="text-xs tabular-nums text-muted-foreground">{j.period}</span>
            </div>
            <p className="mt-2 text-[15px] text-muted-foreground">{j.summary}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
