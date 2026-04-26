import { Info, Lightbulb, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CalloutProps {
  variant?: "note" | "tip" | "warning";
  title?: string;
  children: ReactNode;
}

const iconMap = {
  note: Info,
  tip: Lightbulb,
  warning: AlertTriangle,
};

const labelMap = {
  note: "Note",
  tip: "Recommended",
  warning: "Heads up",
};

export const Callout = ({ variant = "note", title, children }: CalloutProps) => {
  const Icon = iconMap[variant];
  return (
    <div
      className={cn(
        "my-6 rounded-lg border-l-2 border-l-primary",
        "border-y border-r border-white/[0.06]",
        "bg-surface-1 px-5 py-4"
      )}
    >
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">
          {title ?? labelMap[variant]}
        </span>
      </div>
      <div className="text-sm text-[hsl(var(--text-soft))] leading-relaxed [&>p]:my-2 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
};
