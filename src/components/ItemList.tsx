import { ChevronDown } from "lucide-react";

export type ListItem = {
  title: string;
  description: string;
  date: string;
  emoji?: string;
  href?: string;
};

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
      {children}
    </h2>
  );
}

export function ItemList({ items }: { items: ListItem[] }) {
  return (
    <ul className="mt-6 divide-y divide-border">
      {items.map((it) => (
        <li key={it.title}>
          <a
            href={it.href ?? "#"}
            className="group flex items-center gap-4 py-4 transition-colors hover:bg-secondary/60 -mx-2 px-2 rounded-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-lg">
              {it.emoji ?? "✦"}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-foreground">{it.title}</span>
              </div>
              <div className="truncate text-sm text-muted-foreground">{it.description}</div>
            </div>
            <div className="hidden shrink-0 text-xs tabular-nums text-muted-foreground sm:block">
              {it.date}
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-y-0.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
