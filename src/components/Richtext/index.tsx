import {
  PortableText,
  PortableTextBlock,
  PortableTextComponents,
} from "@portabletext/react";

import { InlineEntryHyperlink } from "@/types/global";

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
  richtext?: PortableTextBlock[];
  links?: InlineEntryHyperlink[];
}

export const RichText: React.FC<RichTextProps> = ({ richtext, links = [] }) => {
  if (!richtext) {
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
        const link = links.find((l) => l.id === value?._key);
        const href = link?.href || (value?.slug ? `/projects/${value.slug}` : "");
        return <EntryHyperlink href={href}>{children}</EntryHyperlink>;
      },
    },
  };

  return (
    <article className="flex flex-col gap-y-2 break-words font-manrope">
      <PortableText value={richtext} components={components} />
    </article>
  );
};
