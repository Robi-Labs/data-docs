import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Callout } from "@/components/docs/Callout";

const WebApp = () => (
  <DocsLayout>
    <PageHeader
      eyebrow="Guides · Local web app"
      title="Local web app (MVP)"
      lead="Prefer a browser UI? RobiData ships with a lightweight local web app that runs commands and streams stdout/stderr."
    />

    <div className="prose-doc">
      <p>Start the server from the project root:</p>
    </div>
    <CodeBlock language="bash" code={`python3 webapp/server.py`} />

    <div className="prose-doc">
      <p>Then open:</p>
    </div>
    <CodeBlock language="text" code={`http://127.0.0.1:8787`} />

    <Callout variant="note">
      The web app is intended for local use only. Do not expose it to the public internet
      without adding authentication and command sandboxing.
    </Callout>
  </DocsLayout>
);

export default WebApp;
