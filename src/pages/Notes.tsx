import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { Callout } from "@/components/docs/Callout";

const Notes = () => (
  <DocsLayout>
    <PageHeader
      eyebrow="Reference · Notes"
      title="Notes & best practices"
      lead="A short list of things worth keeping in mind when running RobiData against real-world sources."
    />

    <div className="prose-doc">
      <ul>
        <li>Respect each source's terms of service and any applicable data and licensing rules.</li>
        <li>If a site blocks standard crawling, prefer official APIs or the Firecrawl backend.</li>
        <li>Keep API tokens and secrets in <code>.env</code> — never commit them.</li>
        <li>Use rate limiting (<code>--rate-limit</code>) to avoid overwhelming servers.</li>
        <li>Validate datasets before publishing — a bad sample at scale poisons fine-tunes.</li>
      </ul>
    </div>

    <Callout variant="tip" title="Team">
      Built by the <strong>Robi Team</strong>. Visit <a href="https://robiai.com/" target="_blank" rel="noreferrer">robiai.com</a> to learn more.
    </Callout>
  </DocsLayout>
);

export default Notes;
