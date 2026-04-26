import { useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  to: string;
  label: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const NAV: NavGroup[] = [
  {
    label: "Getting Started",
    items: [
      { to: "/", label: "Introduction" },
      { to: "/installation", label: "Installation" },
      { to: "/quick-start", label: "Quick start" },
    ],
  },
  {
    label: "CLI Reference",
    items: [
      { to: "/cli", label: "Overview" },
      { to: "/cli/scrape", label: "scrape" },
      { to: "/cli/transform", label: "transform" },
    ],
  },
  {
    label: "Guides",
    items: [
      { to: "/firecrawl", label: "Firecrawl backend" },
      { to: "/python-api", label: "Python API" },
      { to: "/web-app", label: "Local web app" },
    ],
  },
  {
    label: "Reference",
    items: [
      { to: "/project-structure", label: "Project structure" },
      { to: "/notes", label: "Notes & best practices" },
    ],
  },
];

const SidebarNav = ({ onNavigate }: { onNavigate?: () => void }) => (
  <nav className="space-y-7">
    {NAV.map((group) => (
      <div key={group.label}>
        <div className="mb-2 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {group.label}
        </div>
        <ul className="space-y-0.5">
          {group.items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end
                onClick={onNavigate}
                className={({ isActive }) =>
                  cn(
                    "block rounded-md px-3 py-1.5 text-sm transition-colors",
                    "border-l border-transparent",
                    isActive
                      ? "border-l-primary bg-white/[0.03] text-primary"
                      : "text-[hsl(var(--text-soft))] hover:text-foreground hover:bg-white/[0.02]"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </nav>
);

const TopBar = ({ onOpenMenu }: { onOpenMenu: () => void }) => (
  <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-background/80 backdrop-blur-md">
    <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-10">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMenu}
          className="lg:hidden rounded-md p-2 text-muted-foreground hover:text-foreground"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
          <span className="font-semibold tracking-tight text-foreground">
            RobiData
          </span>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Docs
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://robiai.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          robiai.com
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <a
          href="https://github.com/Robi-Labs/data"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>
    </div>
  </header>
);

export const DocsLayout = ({ children }: { children: ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <TopBar onOpenMenu={() => setMobileOpen(true)} />

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger className="hidden" />
        <SheetContent side="left" className="w-[280px] border-white/[0.08] bg-surface-2 p-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-semibold">Navigation</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-md p-1 text-muted-foreground hover:text-foreground"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <SidebarNav onNavigate={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="mx-auto flex max-w-7xl gap-10 px-6 lg:px-10">
        <aside className="hidden lg:block w-60 shrink-0 py-10">
          <div className="sticky top-20">
            <SidebarNav />
          </div>
        </aside>

        <main key={location.pathname} className="min-w-0 flex-1 py-10 animate-fade-in">
          <div className="max-w-3xl">{children}</div>

          <footer className="mt-24 border-t border-white/[0.06] pt-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Built by Robi Team
              </p>
              <a
                href="https://robiai.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                robiai.com →
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};
