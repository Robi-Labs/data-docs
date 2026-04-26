import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";

const steps = [
  {
    n: "01",
    title: "Scrape data",
    body: (
      <>
        <p>Crawl a site and write raw entries to JSONL.</p>
        <CodeBlock language="bash" code={`robidata scrape https://example.com --follow-links --max-pages 20`} />
        <p className="text-sm text-muted-foreground">
          Output is written to <code>./datasets/scraped.jsonl</code> by default.
        </p>
      </>
    ),
  },
  {
    n: "02",
    title: "Transform into a training format",
    body: (
      <>
        <CodeBlock
          language="bash"
          code={`robidata transform ./datasets/scraped.jsonl --format alpaca --anonymize`}
        />
      </>
    ),
  },
  {
    n: "03",
    title: "Validate the output",
    body: <CodeBlock language="bash" code={`robidata validate ./datasets/train.jsonl --format instruction`} />,
  },
  {
    n: "04",
    title: "Inspect dataset stats",
    body: <CodeBlock language="bash" code={`robidata stats ./datasets/train.jsonl`} />,
  },
  {
    n: "05",
    title: "Publish to Hugging Face",
    body: (
      <>
        <CodeBlock
          language="bash"
          code={`robidata publish ./datasets/train.json --repo-id your-user/your-dataset --token hf_xxx`}
        />
        <Callout variant="tip">
          Prefer storing <code>HF_TOKEN</code> in a <code>.env</code> file at the project root —
          RobiData auto-loads it.
        </Callout>
      </>
    ),
  },
];

const QuickStart = () => (
  <DocsLayout>
    <PageHeader
      eyebrow="Getting Started · Quick start"
      title="Quick start"
      lead="From a URL to a published dataset in five steps."
    />

    <div className="prose-doc">
      <p>
        This walkthrough takes you through scraping, transforming, validating, inspecting
        and publishing a dataset. Each step builds on the artifacts produced by the
        previous one.
      </p>
    </div>

    <ol className="mt-10 space-y-10">
      {steps.map((s) => (
        <li key={s.n} className="grid gap-5 sm:grid-cols-[auto,1fr] sm:gap-8">
          <div className="font-mono text-2xl text-primary">{s.n}</div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
            <div className="prose-doc mt-2">{s.body}</div>
          </div>
        </li>
      ))}
    </ol>
  </DocsLayout>
);

export default QuickStart;
