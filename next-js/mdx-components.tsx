import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-semibold text-4xl my-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-semibold text-3xl my-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-semibold text-2xl my-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-semibold text-xl my-6">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="font-semibold text-lg my-6">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="font-semibold text-lg my-6">{children}</h6>
    ),
    ul: ({ children }) => <ul className="ps-10 list-revert">{children}</ul>,
    ol: ({ children }) => <ol className="ps-10 list-revert">{children}</ol>,
    p: ({ children }) => <p className="my-4">{children}</p>,
    code: ({ children }) => (
      <code className="bg-highlight dark:bg-highlight-dark text-primary rounded p-1">
        {children}
      </code>
    ),
    hr: () => <hr className="my-6" />,
    ...components,
  };
}
