"use client";

import {
  PortableText,
  PortableTextBlock,
  PortableTextComponents,
} from "@portabletext/react";

import {
  Bold,
  EntryHyperlink,
  Heading,
  Hyperlink,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "./Blocks";

interface RichTextProps {
  value?: PortableTextBlock[];
}

export const RichText: React.FC<RichTextProps> = ({ value }) => {
  if (!value?.length) {
    return null;
  }

  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <Text>{children}</Text>,
      h1: ({ children }) => <Heading size={1}>{children}</Heading>,
      h2: ({ children }) => <Heading size={2}>{children}</Heading>,
      h3: ({ children }) => <Heading size={3}>{children}</Heading>,
      h4: ({ children }) => <Heading size={4}>{children}</Heading>,
      h5: ({ children }) => <Heading size={5}>{children}</Heading>,
      h6: ({ children }) => <Heading size={6}>{children}</Heading>,
    },
    list: {
      bullet: ({ children }) => <UnorderedList>{children}</UnorderedList>,
      number: ({ children }) => <OrderedList>{children}</OrderedList>,
    },
    listItem: {
      bullet: ({ children }) => <ListItem>{children}</ListItem>,
      number: ({ children }) => <ListItem>{children}</ListItem>,
    },
    marks: {
      strong: ({ children }) => <Bold>{children}</Bold>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ value, children }) => {
        const href = value?.href || "";
        const blank = value?.blank !== false;
        return (
          <Hyperlink uri={href} blank={blank}>
            {children}
          </Hyperlink>
        );
      },
      internalLink: ({ value, children }) => {
        // Supports both direct slug (from expanded query) and nested reference
        const slug = value?.slug || value?.reference?.slug?.current;
        const href = slug ? `/projects/${slug}` : "";
        return <EntryHyperlink href={href}>{children}</EntryHyperlink>;
      },
      // Handle direct reference marks (from migrated content or alternative schema)
      reference: ({ value, children }) => {
        const slug = value?.slug?.current || value?.slug;
        const href = slug ? `/projects/${slug}` : "";
        return <EntryHyperlink href={href}>{children}</EntryHyperlink>;
      },
    },
  };

  return (
    <article className="flex flex-col gap-y-2 wrap-break-words font-manrope">
      <PortableText value={value} components={components} />
    </article>
  );
};
