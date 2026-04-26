import { cn } from "@/lib/utils";

export const MetaLabel = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("meta-label", className)}>{children}</span>
);
