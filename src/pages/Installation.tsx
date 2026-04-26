import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";

const Installation = () => (
  <DocsLayout>
    <PageHeader
      eyebrow="Getting Started · Installation"
      title="Installation"
      lead="Install RobiData as an editable Python package. Optional extras unlock PDF extraction and other features."
    />
    <div className="prose-doc">
      <h2>Requirements</h2>
      <ul>
        <li>Python 3.9 or newer</li>
        <li><code>pip</code> with editable install support</li>
      </ul>

      <h2>Standard install</h2>
      <p>From the repository root:</p>
      <CodeBlock language="bash" code={`pip install -e .`} />

      <h2>Optional extras</h2>
      <p>Install only what you need:</p>
      <CodeBlock
        language="bash"
        code={`pip install -e ".[pdf]"   # PDF extraction support
pip install -e ".[all]"   # all optional dependencies`}
      />

      <Callout variant="tip" title="Recommended">
        Use a virtual environment (<code>venv</code>, <code>uv</code>, or <code>conda</code>) to keep
        RobiData and its dependencies isolated from your system Python.
      </Callout>

      <h2>Verify the install</h2>
      <CodeBlock language="bash" code={`robidata --help`} />
      <p>You should see the list of available subcommands: <code>scrape</code>, <code>transform</code>, <code>validate</code>, <code>publish</code>, and <code>stats</code>.</p>
    </div>
  </DocsLayout>
);

export default Installation;
