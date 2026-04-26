import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { PageHeader } from "@/components/docs/PageHeader";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <DocsLayout>
      <PageHeader
        eyebrow="Error · 404"
        title="Page not found"
        lead="The page you were looking for doesn't exist or has moved."
      />
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
      >
        Back to docs home
      </Link>
    </DocsLayout>
  );
};

export default NotFound;
