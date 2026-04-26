import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export const CodeBlock = ({ code, language = "bash", className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  return (
    <div
      className={cn(
        "group relative my-5 overflow-hidden rounded-lg border border-white/[0.08]",
        "bg-surface-2",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {language}
        </span>
        <button
          type="button"
          onClick={onCopy}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md px-2 py-1",
            "font-mono text-[10px] uppercase tracking-wider",
            "text-muted-foreground hover:text-foreground",
            "border border-transparent hover:border-white/[0.08]",
            "transition-colors"
          )}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-primary" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-relaxed">
        <code className="font-mono text-[hsl(var(--text-soft))]">{code.trim()}</code>
      </pre>
    </div>
  );
};
