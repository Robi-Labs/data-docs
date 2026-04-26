import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { OptionTable } from "@/components/docs/OptionTable";

const CliScrape = () => (
  <DocsLayout>
    <PageHeader
      eyebrow="CLI Reference · scrape"
      title="robidata scrape"
      lead="Collect raw entries from the web, PDFs, APIs, GitHub repositories, or Firecrawl into a single JSONL file."
    />

    <CodeBlock
      language="bash"
      code={`robidata scrape <urls> [options]`}
    />

    <h2 className="mt-12 mb-4 text-2xl font-semibold">Options</h2>
    <OptionTable
      options={[
        { flag: "--source", type: "web|pdf|api|github|firecrawl", description: "Backend used to collect entries." },
        { flag: "--max-pages", type: "int", description: "Maximum number of pages to crawl." },
        { flag: "--rate-limit", type: "seconds", description: "Delay between requests to respect target servers." },
        { flag: "--timeout", type: "seconds", description: "HTTP timeout per request." },
        { flag: "--follow-links", type: "flag", description: "Follow internal links discovered during the crawl." },
        { flag: "--max-depth", type: "int", description: "Maximum link-following depth from the seed URLs." },
        { flag: "--ignore-robots", type: "flag", description: "Ignore robots.txt (web source only). Use responsibly." },
        { flag: "--github-repo", type: "owner/name", description: "Target GitHub repository when --source=github." },
        { flag: "--github-token", type: "token", description: "GitHub token for higher rate limits / private repos." },
        { flag: "--firecrawl-api-key", type: "key", description: "API key for the Firecrawl backend." },
        { flag: "--firecrawl-formats", type: "csv", description: "Output formats for Firecrawl, e.g. markdown,html." },
      ]}
    />

    <h2 className="mt-12 mb-4 text-2xl font-semibold">Examples</h2>
    <div className="prose-doc">
      <p>Crawl a small site, following internal links:</p>
    </div>
    <CodeBlock
      language="bash"
      code={`robidata scrape https://example.com --follow-links --max-pages 20`}
    />
    <div className="prose-doc">
      <p>Use Firecrawl for a JavaScript-heavy site:</p>
    </div>
    <CodeBlock
      language="bash"
      code={`robidata scrape https://example.com --source firecrawl --firecrawl-api-key fc-xxx`}
    />
    <div className="prose-doc">
      <p>Pull issues and READMEs from a GitHub repository:</p>
    </div>
    <CodeBlock
      language="bash"
      code={`robidata scrape --source github --github-repo owner/name --github-token ghp_xxx`}
    />
  </DocsLayout>
);

export default CliScrape;
