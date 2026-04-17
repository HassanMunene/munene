import { ProfileHeader } from "./ProfileHeader";
import { SiteNav } from "./SiteNav";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <ProfileHeader />
        <SiteNav />
        <main className="mt-10">{children}</main>
        <footer className="mt-24 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alex Carter. Built with care.
        </footer>
      </div>
    </div>
  );
}
