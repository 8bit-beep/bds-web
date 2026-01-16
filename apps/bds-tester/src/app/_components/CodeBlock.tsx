"use client";

import { useCallback, useMemo, useState } from "react";

type CodeBlockProps = {
  code: string;
  language?: string;
  label?: string;
};

export const CodeBlock = ({ code, language = "txt", label }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }, [code]);

  const lineCount = useMemo(() => code.split("\n").length, [code]);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-greyscale-20 bg-greyscale-0/50">
      <div className="flex items-center justify-between gap-3 border-b border-greyscale-20 px-4 py-2">
        <div className="flex items-center gap-2">
          {label ? (
            <span className="text-caption2 text-greyscale-80">{label}</span>
          ) : null}
          <span className="rounded-md border border-greyscale-20 bg-white/50 px-2 py-0.5 text-[11px] leading-4 text-greyscale-70">
            {language}
          </span>
          <span className="text-[11px] leading-4 text-greyscale-60">
            {lineCount} lines
          </span>
        </div>

        <button
          type="button"
          onClick={onCopy}
          className="rounded-lg border border-greyscale-20 bg-white/40 px-3 py-1.5 text-caption2 text-greyscale-80 hover:bg-white/60">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <pre className="w-full overflow-x-auto p-4 text-[13px] leading-5 text-greyscale-90">
        <code className="whitespace-pre">{code}</code>
      </pre>
    </div>
  );
};
