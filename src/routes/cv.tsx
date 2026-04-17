import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/ItemList";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Alex Carter" },
      { name: "description", content: "Curriculum vitae." },
    ],
  }),
  component: CV,
});

function CV() {
  return (
    <PageShell>
      <SectionHeading>CV</SectionHeading>
      <div className="mt-8 space-y-8 text-[15px]">
        <section>
          <h3 className="font-display text-2xl font-bold text-foreground">Summary</h3>
          <p className="mt-2 text-muted-foreground">
            Software maker with 8+ years of experience building delightful web and mobile
            applications. Focused on craft, performance, and design systems.
          </p>
        </section>
        <section>
          <h3 className="font-display text-2xl font-bold text-foreground">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {["TypeScript", "React", "React Native", "Swift", "Node.js", "Design Systems", "Tailwind CSS", "PostgreSQL"].map(
              (s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs"
                >
                  {s}
                </span>
              ),
            )}
          </div>
        </section>
        <section>
          <h3 className="font-display text-2xl font-bold text-foreground">Education</h3>
          <p className="mt-2 text-muted-foreground">
            B.Sc. Computer Science — State University, 2018
          </p>
        </section>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 rounded-full border border-accent-green bg-accent-green-soft px-4 py-2 text-sm font-medium"
        >
          Download PDF ↓
        </a>
      </div>
    </PageShell>
  );
}
