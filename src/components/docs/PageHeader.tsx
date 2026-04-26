import { MetaLabel } from "./MetaLabel";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
}

export const PageHeader = ({ eyebrow, title, lead }: PageHeaderProps) => (
  <header className="mb-10 animate-fade-in">
    <MetaLabel>{eyebrow}</MetaLabel>
    <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-[2.75rem] sm:leading-[1.1]">
      {title}
    </h1>
    {lead && (
      <p className="mt-4 max-w-2xl text-lg text-[hsl(var(--text-soft))] leading-relaxed">
        {lead}
      </p>
    )}
    <div className="mt-8 h-px w-full bg-white/[0.06]" />
  </header>
);
