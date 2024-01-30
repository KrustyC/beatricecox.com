import parse from "html-react-parser";

import {
  BaseBlock,
  ProjectBlock,
  ProjectBlockType,
  TwoTitlesAndParagraphBlock as ITwoTitlesAndParagraphBlock,
} from "@/types/global";

interface ParagraphProps {
  mb?: string;
  paragraph: {
    title: string;
    paragraph: string;
  };
}

const Paragraph: React.FC<ParagraphProps> = ({ paragraph, mb = "" }) => (
  <div className={`flex ${mb} flex-col lg:flex-row`}>
    <h3 className="lg:w-1/3 font-light text-3xl lg:text-right lg:mr-24">
      {paragraph.title}
    </h3>
    <div className="lg:w-2/3 lg:max-w-2/3 text-lg mt-4 lg:mt-0">
      {parse(paragraph.paragraph)}
    </div>
  </div>
);

export function blockIsTwoTitlesAndParagraphBlock(
  block: Partial<BaseBlock> | ProjectBlock
): block is ITwoTitlesAndParagraphBlock {
  return block.type === ProjectBlockType.TWO_TITLES_AND_PARAGRAPH;
}

interface TwoTitlesAndParagraphBlockProps {
  block: ITwoTitlesAndParagraphBlock;
}

export const TwoTitlesAndParagraphBlock: React.FC<
  TwoTitlesAndParagraphBlockProps
> = ({ block }) => {
  return (
    <div
      className="project-section"
      style={{ background: block.backgroundColor || "white" }} // @TODO Implement in B
    >
      <div className="project-container flex flex-col">
        {block.firstItem && (
          <Paragraph mb="mb-10" paragraph={block.firstItem} />
        )}

        {block.secondItem && <Paragraph paragraph={block.secondItem} />}
      </div>
    </div>
  );
};
