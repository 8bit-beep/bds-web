"use client";

import { CodeBlock } from "./CodeBlock";

type ExampleCardProps = {
  title: string;
  description?: string;
  code?: string;
  language?: string;
  children: React.ReactNode;
};

export const ExampleCard = ({
  title,
  description,
  code,
  language = "tsx",
  children,
}: ExampleCardProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-greyscale-20 bg-white/20 p-5">
      <div className="flex flex-col gap-1">
        <div className="text-h4 text-greyscale-90">{title}</div>
        {description ? (
          <div className="text-body text-greyscale-70">{description}</div>
        ) : null}
      </div>

      <div className="rounded-2xl border border-greyscale-20 bg-white/35 p-4">
        {children}
      </div>

      {code ? <CodeBlock label="Code" language={language} code={code} /> : null}
    </div>
  );
};
