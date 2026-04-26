import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";
import { CodeBlock } from "@/components/docs/CodeBlock";

const PythonApi = () => (
  <DocsLayout>
    <PageHeader
      eyebrow="Guides · Python API"
      title="Python API"
      lead="Drive the full pipeline programmatically with typed configuration models."
    />

    <div className="prose-doc">
      <p>
        Construct a <code>DatasetConfig</code> describing the scrape and transform stages,
        pass it to <code>DatasetPipeline</code>, then call <code>execute()</code>. The
        result includes statistics, output paths, and any warnings.
      </p>
    </div>

    <CodeBlock
      language="python"
      code={`from datasetforge import DatasetPipeline
from datasetforge.models import (
    DatasetConfig,
    ScraperConfig,
    TransformConfig,
    SourceType,
    DataFormat,
)

config = DatasetConfig(
    name="my-dataset",
    scraper=ScraperConfig(
        source_type=SourceType.FIRECRAWL,
        urls=["https://example.com"],
        firecrawl_api_key="fc-xxx",
    ),
    transform=TransformConfig(
        output_format=DataFormat.ALPACA,
        deduplicate=True,
    ),
)

pipeline = DatasetPipeline(config)
result = pipeline.execute()
print(result.stats.total_entries)`}
    />

    <div className="prose-doc">
      <h2>Why use the Python API?</h2>
      <ul>
        <li>Embed RobiData in larger ETL or training pipelines.</li>
        <li>Generate configurations dynamically from a database or task queue.</li>
        <li>Share typed config objects between services.</li>
      </ul>
    </div>
  </DocsLayout>
);

export default PythonApi;
