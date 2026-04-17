import { Link, useLocation } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/reading", label: "Reading" },
  { to: "/timeline", label: "Timeline" },
  { to: "/cv", label: "CV" },
] as const;

export function SiteNav() {
  const { pathname } = useLocation();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="mt-10 flex items-center justify-between border-b border-border pb-2">
      <ul className="-mb-px flex flex-wrap items-center gap-1 text-[15px]">
        {items.map((it) => {
          const active = pathname === it.to;
          return (
            <li key={it.to}>
              <Link
                to={it.to}
                className={`relative inline-block rounded-t-md px-3 py-1.5 transition-colors ${
                  active
                    ? "bg-accent-green-soft font-semibold text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {it.label}
                {active && (
                  <span className="absolute -bottom-[3px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-green" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => setDark((d) => !d)}
        className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        aria-label="Toggle theme"
      >
        {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
    </nav>
  );
}
