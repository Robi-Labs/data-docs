import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { OptionTable } from "@/components/docs/OptionTable";

const CliTransform = () => (
  <DocsLayout>
    <PageHeader
      eyebrow="CLI Reference · transform"
      title="robidata transform"
      lead="Clean, deduplicate, anonymize, and reshape scraped entries into the training format of your choice."
    />

    <CodeBlock language="bash" code={`robidata transform <input.jsonl> [options]`} />

    <h2 className="mt-12 mb-4 text-2xl font-semibold">Options</h2>
    <OptionTable
      options={[
        { flag: "--format", type: "alpaca|sharegpt|chatml|qa_pairs|raw", description: "Output format for the dataset." },
        { flag: "--min-length", type: "int", description: "Drop entries shorter than this many characters." },
        { flag: "--max-length", type: "int", description: "Drop or truncate entries longer than this." },
        { flag: "--no-dedup", type: "flag", description: "Disable near-duplicate detection." },
        { flag: "--dedup-threshold", type: "float (0-1)", description: "Similarity threshold above which entries are considered duplicates." },
        { flag: "--anonymize", type: "flag", description: "Run a PII anonymization pass on entries." },
      ]}
    />

    <h2 className="mt-12 mb-4 text-2xl font-semibold">Examples</h2>
    <div className="prose-doc">
      <p>Build an Alpaca-formatted dataset with PII removal:</p>
    </div>
    <CodeBlock
      language="bash"
      code={`robidata transform ./datasets/scraped.jsonl --format alpaca --anonymize`}
    />
    <div className="prose-doc">
      <p>Produce a ShareGPT dataset, keeping all duplicates:</p>
    </div>
    <CodeBlock
      language="bash"
      code={`robidata transform ./datasets/scraped.jsonl --format sharegpt --no-dedup`}
    />
  </DocsLayout>
);

export default CliTransform;
