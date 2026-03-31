import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ className = "", ...props }) => (
    <h1 className={`text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl ${className}`} {...props} />
  ),
  h2: ({ className = "", ...props }) => (
    <h2 className={`mt-10 text-2xl font-semibold tracking-tight text-zinc-100 ${className}`} {...props} />
  ),
  h3: ({ className = "", ...props }) => (
    <h3 className={`mt-8 text-xl font-medium tracking-tight text-zinc-100 ${className}`} {...props} />
  ),
  p: ({ className = "", ...props }) => (
    <p className={`mt-4 leading-8 text-zinc-300 ${className}`} {...props} />
  ),
  ul: ({ className = "", ...props }) => (
    <ul className={`mt-4 list-disc space-y-2 pl-6 text-zinc-300 ${className}`} {...props} />
  ),
  ol: ({ className = "", ...props }) => (
    <ol className={`mt-4 list-decimal space-y-2 pl-6 text-zinc-300 ${className}`} {...props} />
  ),
  li: ({ className = "", ...props }) => <li className={`leading-7 ${className}`} {...props} />,
  a: ({ className = "", ...props }) => (
    <a
      className={`font-medium text-sky-300 underline decoration-sky-500/40 underline-offset-4 transition-colors hover:text-sky-200 ${className}`}
      {...props}
    />
  ),
  blockquote: ({ className = "", ...props }) => (
    <blockquote
      className={`mt-6 border-l-2 border-zinc-700 pl-4 italic text-zinc-300 ${className}`}
      {...props}
    />
  ),
  code: ({ className = "", ...props }) => (
    <code
      className={`rounded bg-zinc-900 px-1.5 py-1 font-mono text-sm text-zinc-200 ${className}`}
      {...props}
    />
  ),
  pre: ({ className = "", ...props }) => (
    <pre
      className={`mt-6 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-200 ${className}`}
      {...props}
    />
  ),
  table: ({ className = "", ...props }) => (
    <div className="mt-6 overflow-x-auto">
      <table className={`w-full border-collapse text-left text-sm text-zinc-300 ${className}`} {...props} />
    </div>
  ),
  th: ({ className = "", ...props }) => (
    <th className={`border-b border-zinc-700 px-3 py-2 font-semibold text-zinc-100 ${className}`} {...props} />
  ),
  td: ({ className = "", ...props }) => (
    <td className={`border-b border-zinc-800 px-3 py-2 ${className}`} {...props} />
  ),
};

