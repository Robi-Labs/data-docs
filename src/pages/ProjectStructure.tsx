import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";

const ProjectStructure = () => (
  <DocsLayout>
    <PageHeader
      eyebrow="Reference · Project structure"
      title="Project structure"
      lead="A quick map of the source tree so you know where to look when extending RobiData."
    />

    <CodeBlock
      language="text"
      code={`src/datasetforge/
  cli.py          # CLI entry point and argument parsing
  models.py       # Typed config & result models
  pipeline.py     # Pipeline orchestration
  publisher.py    # Hugging Face publishing
  scrapers.py     # Backend implementations
  transformers.py # Cleaning, dedup, anonymization, format conversion
webapp/
  index.html      # Local web UI
  server.py       # Lightweight server that runs robidata commands`}
    />

    <div className="prose-doc">
      <h2>Where to add features</h2>
      <ul>
        <li><strong>New scrape source:</strong> add a class in <code>scrapers.py</code> and register it in <code>SourceType</code>.</li>
        <li><strong>New training format:</strong> add a converter in <code>transformers.py</code> and register it in <code>DataFormat</code>.</li>
        <li><strong>New CLI flag:</strong> wire it up in <code>cli.py</code> and pass through to the matching config model.</li>
      </ul>
    </div>
  </DocsLayout>
);

export default ProjectStructure;
