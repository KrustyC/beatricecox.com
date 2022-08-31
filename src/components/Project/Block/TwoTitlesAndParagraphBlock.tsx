import {
  BaseBlock,
  TwoTitlesAndParagraphBlock as ITwoTitlesAndParagraphBlock,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";
import parse from "html-react-parser";

interface ParagraphProps {
  mb?: string;
  paragraph: {
    title: string;
    paragraph: string;
  };
}

const Paragraph: React.FC<ParagraphProps> = ({ paragraph, mb = "" }) => (
  <div className={`flex ${mb}`}>
    <h3 className="w-1/3 font-light text-3xl text-right mr-24">
      {paragraph.title}
    </h3>
    <span className="w-2/3 max-w-2/3">{parse(paragraph.paragraph)}</span>
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
