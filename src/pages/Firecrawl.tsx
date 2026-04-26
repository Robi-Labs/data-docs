import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";

const Firecrawl = () => (
  <DocsLayout>
    <PageHeader
      eyebrow="Guides · Firecrawl"
      title="Firecrawl backend"
      lead="For JavaScript-heavy websites where the standard web scraper struggles, switch to Firecrawl."
    />

    <div className="prose-doc">
      <h2>Option A — pass the API key directly</h2>
    </div>
    <CodeBlock
      language="bash"
      code={`robidata scrape https://example.com --source firecrawl --firecrawl-api-key fc-xxx`}
    />

    <div className="prose-doc">
      <h2>Option B — use a .env file (recommended)</h2>
      <p>Create a <code>.env</code> file in the project root:</p>
    </div>
    <CodeBlock
      language="env"
      code={`FIRECRAWL_API_KEY=fc-xxx
HF_TOKEN=hf_xxx`}
    />
    <div className="prose-doc">
      <p>RobiData auto-loads <code>.env</code> at startup. You can then run:</p>
    </div>
    <CodeBlock language="bash" code={`robidata scrape https://example.com --source firecrawl`} />

    <Callout variant="warning">
      Never commit <code>.env</code> to source control. Add it to your <code>.gitignore</code>.
    </Callout>

    <div className="prose-doc">
      <h2>Output formats</h2>
      <p>
        Choose what Firecrawl returns with <code>--firecrawl-formats</code>:
      </p>
    </div>
    <CodeBlock
      language="bash"
      code={`robidata scrape https://example.com --source firecrawl --firecrawl-formats markdown,html`}
    />
  </DocsLayout>
);

export default Firecrawl;
