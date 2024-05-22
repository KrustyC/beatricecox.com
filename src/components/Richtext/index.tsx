import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Document } from "@contentful/rich-text-types";

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
  richtext?: Document;
  links?: InlineEntryHyperlink[];
}

export const RichText: React.FC<RichTextProps> = ({ richtext, links = [] }) => {
  if (!richtext) {
    return null;
  }

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: ({ data }, content) => {
        const link = links.find((link) => link.id === data.target.sys.id);
        return (
          <EntryHyperlink href={link?.href || ""}>{content}</EntryHyperlink>
        );
      },
      [BLOCKS.PARAGRAPH]: (_, children: any) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (_, children: any) => (
        <Heading size={1}>{children}</Heading>
      ),
      [BLOCKS.HEADING_2]: (_, children: any) => (
        <Heading size={2}>{children}</Heading>
      ),
      [BLOCKS.HEADING_3]: (_, children: any) => (
        <Heading size={3}>{children}</Heading>
      ),
      [BLOCKS.HEADING_4]: (_, children: any) => (
        <Heading size={4}>{children}</Heading>
      ),
      [BLOCKS.HEADING_5]: (_, children: any) => (
        <Heading size={5}>{children}</Heading>
      ),
      [BLOCKS.HEADING_6]: (_, children: any) => (
        <Heading size={6}>{children}</Heading>
      ),
      [BLOCKS.OL_LIST]: (_, children: any) => (
        <OrderedList>{children}</OrderedList>
      ),
      [BLOCKS.UL_LIST]: (_, children: any) => (
        <UnorderedList>{children}</UnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node) => {
        const UnTaggedChildren = documentToReactComponents(
          node as unknown as any,
          {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (_, children) => children,
              [BLOCKS.LIST_ITEM]: (_, children) => children,
              [INLINES.HYPERLINK]: ({ data }, children) => (
                <Hyperlink uri={data.uri}>{children}</Hyperlink>
              ),
            },
          }
        );

        return <ListItem>{UnTaggedChildren}</ListItem>;
      },
    },
  };

  return (
    <article className="flex flex-col gap-y-2 break-words font-manrope">
      {documentToReactComponents(richtext, options)}
    </article>
  );
};
