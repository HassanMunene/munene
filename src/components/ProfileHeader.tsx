import { MapPin, Mail } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const links = [
  { label: "Twitter/X", href: "https://twitter.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export function ProfileHeader() {
  return (
    <header className="flex flex-col-reverse items-start justify-between gap-8 sm:flex-row">
      <div className="flex-1">
        <h1 className="font-display text-5xl font-black leading-none tracking-tight text-foreground sm:text-6xl">
          Alex Carter
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="font-semibold text-foreground">Software Maker</span>
          <span className="text-muted-foreground">·</span>
          <span className="italic text-muted-foreground">Frontend / Mobile</span>
          <span className="text-muted-foreground">·</span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            San Francisco, USA
          </span>
        </div>

        <ul className="mt-5 space-y-1.5 text-[15px] text-foreground">
          <li className="flex items-start gap-2.5">
            <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
            Senior Frontend Engineer at Acme Labs
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
            8+ years building mobile &amp; web applications
          </li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
            >
              {l.label} <span className="text-xs text-muted-foreground">↗</span>
            </a>
          ))}
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-1.5 rounded-full border border-accent-green bg-accent-green-soft px-3.5 py-1.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
          >
            <Mail className="h-3.5 w-3.5" /> Say hello
          </a>
        </div>
      </div>

      <div className="shrink-0">
        <div className="rounded-full p-1 ring-2 ring-accent-green">
          <img
            src={avatar}
            alt="Alex Carter portrait"
            className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
          />
        </div>
      </div>
    </header>
  );
}
