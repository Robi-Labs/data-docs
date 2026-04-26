import { Link } from "react-router-dom";
import { ArrowRight, Database, Filter, Globe, Sparkles, Upload, Zap } from "lucide-react";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";

const features = [
  { icon: Globe, title: "Multi-source scraping", desc: "Web, PDF, API, GitHub, and Firecrawl backends." },
  { icon: Filter, title: "Cleaning pipeline", desc: "HTML stripping, Unicode normalization, whitespace cleanup." },
  { icon: Sparkles, title: "Dedup & PII", desc: "Deduplication and optional PII anonymization." },
  { icon: Database, title: "Training formats", desc: "Alpaca, ShareGPT, ChatML, Q&A pairs, raw text." },
  { icon: Zap, title: "Splits & stats", desc: "Train/validation/test splitting with detailed statistics." },
  { icon: Upload, title: "Hugging Face publishing", desc: "Push curated datasets directly to the Hub." },
];

const Index = () => {
  return (
    <DocsLayout>
      <PageHeader
        eyebrow="Getting Started · Introduction"
        title="RobiData"
        lead="Automated dataset creation and publishing pipeline for LLM training workflows. Collect, clean, format, validate, and publish — end to end."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        <Badge label="Python 3.9+" />
        <Badge label="MIT License" />
        <Badge label="robiai.com" href="https://robiai.com/" />
      </div>

      <div className="prose-doc">
        <p>
          RobiData helps you collect data from multiple sources, clean and transform it
          into instruction or chat formats, validate quality, and publish datasets to
          Hugging Face — all driven from a single CLI or a typed Python API.
        </p>
      </div>

      <div className="my-10 grid gap-3 sm:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="surface-card p-5 transition-colors hover:border-primary/35"
          >
            <f.icon className="h-4 w-4 text-primary" />
            <div className="mt-3 text-sm font-semibold text-foreground">{f.title}</div>
            <p className="mt-1 text-sm text-[hsl(var(--text-soft))]">{f.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 mb-4 text-2xl font-semibold">Install in seconds</h2>
      <CodeBlock language="bash" code={`pip install -e .`} />

      <h2 className="mt-12 mb-4 text-2xl font-semibold">Run your first pipeline</h2>
      <CodeBlock
        language="bash"
        code={`robidata scrape https://example.com --follow-links --max-pages 20
robidata transform ./datasets/scraped.jsonl --format alpaca --anonymize
robidata publish ./datasets/train.json --repo-id your-user/your-dataset`}
      />

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/quick-start"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Read the quick start
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/cli"
          className="inline-flex items-center gap-2 rounded-md border border-white/[0.08] px-4 py-2.5 text-sm text-foreground transition-colors hover:border-primary/35"
        >
          CLI reference
        </Link>
      </div>
    </DocsLayout>
  );
};

const Badge = ({ label, href }: { label: string; href?: string }) => {
  const inner = (
    <span className="inline-flex items-center gap-1.5 rounded border border-white/[0.08] bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[hsl(var(--text-soft))]">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {label}
    </span>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
        {inner}
      </a>
    );
  }
  return inner;
};

export default Index;
