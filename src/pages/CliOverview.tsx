import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";

const commands = [
  {
    name: "scrape",
    sig: "robidata scrape <urls> [options]",
    desc: "Collect raw data from web pages, PDFs, APIs, GitHub repos, or Firecrawl.",
    href: "/cli/scrape",
  },
  {
    name: "transform",
    sig: "robidata transform <input.jsonl> [options]",
    desc: "Clean, deduplicate, anonymize, and reshape into a training format.",
    href: "/cli/transform",
  },
  {
    name: "validate",
    sig: "robidata validate <input.jsonl> [options]",
    desc: "Check that entries match the expected schema for the target format.",
  },
  {
    name: "publish",
    sig: "robidata publish <input.jsonl|input.json> --repo-id <user/dataset>",
    desc: "Push the dataset to a Hugging Face repository.",
  },
  {
    name: "stats",
    sig: "robidata stats <input.jsonl>",
    desc: "Print summary statistics for a dataset file.",
  },
];

const CliOverview = () => (
  <DocsLayout>
    <PageHeader
      eyebrow="CLI Reference · Overview"
      title="CLI Overview"
      lead="The robidata CLI is the primary entry point. Each subcommand maps to a stage of the pipeline."
    />

    <CodeBlock
      language="bash"
      code={`robidata scrape <urls> [options]
robidata transform <input.jsonl> [options]
robidata validate <input.jsonl> [options]
robidata publish <input.jsonl|input.json> --repo-id <user/dataset> [options]
robidata stats <input.jsonl>`}
    />

    <h2 className="mt-12 mb-4 text-2xl font-semibold">Commands</h2>
    <div className="space-y-3">
      {commands.map((c) => {
        const card = (
          <div className="surface-card p-5 transition-colors hover:border-primary/35">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-sm text-primary">{c.name}</span>
              {c.href && (
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Reference →
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-[hsl(var(--text-soft))]">{c.desc}</p>
            <pre className="mt-3 overflow-x-auto rounded-md bg-surface-2 px-3 py-2 font-mono text-[12px] text-muted-foreground">
              {c.sig}
            </pre>
          </div>
        );
        return c.href ? (
          <Link key={c.name} to={c.href} className="block">
            {card}
          </Link>
        ) : (
          <div key={c.name}>{card}</div>
        );
      })}
    </div>
  </DocsLayout>
);

export default CliOverview;
