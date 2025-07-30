import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="mb-0 pt-12 font-medium text-green-400" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="mb-3 mt-8 font-medium text-gray-800 dark:text-zinc-200"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="mb-3 mt-8 font-medium text-gray-800 dark:text-zinc-200"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="leading-snug text-gray-800 dark:text-zinc-300" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className="list-decimal space-y-2 pl-5 text-gray-800 dark:text-zinc-300"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="list-disc space-y-1 pl-5 text-gray-800 dark:text-zinc-300"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-3 ml-[0.075em] border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}

// import type { MDXComponents } from "mdx/types";

// export function useMDXComponents(components: MDXComponents): MDXComponents {
//   return {
//     h1: ({ children }) => (
//       <h1 className="mt-8 text-4xl font-semibold text-green-500">{children}</h1>
//     ),
//     h2: ({ children }) => (
//       <h2 className="mt-8 text-3xl font-semibold text-black dark:text-white">
//         {children}
//       </h2>
//     ),
//     h3: ({ children }) => (
//       <h3 className="mt-8 text-2xl font-semibold text-black dark:text-white">
//         {children}
//       </h3>
//     ),
//     h4: ({ children }) => (
//       <h4 className="mt-8 text-xl font-semibold text-black dark:text-white">
//         {children}
//       </h4>
//     ),
//     h5: ({ children }) => (
//       <h5 className="mt-8 text-lg font-semibold text-black dark:text-white">
//         {children}
//       </h5>
//     ),
//     h6: ({ children }) => (
//       <h6 className="mt-8 text-base font-semibold text-black dark:text-white">
//         {children}
//       </h6>
//     ),
//     p: ({ children }) => (
//       <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
//         {children}
//       </p>
//     ),
//     ul: ({ children }) => (
//       <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
//         {children}
//       </ul>
//     ),
//     li: ({ children }) => <li className="mt-2">{children}</li>,
//     strong: ({ children }) => <strong className="font-bold">{children}</strong>,
//     // Add other components as needed, e.g., a, blockquote, pre, code, table, etc.
//     ...components,
//   };
// }
