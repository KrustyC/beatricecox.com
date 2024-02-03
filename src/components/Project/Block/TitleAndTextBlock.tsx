import { RichText } from "@/components/Richtext";
import {
  BaseBlock,
  ProjectBlock,
  ProjectBlockType,
  TitleAndTextBlock as ITitleAndTextBlock,
} from "@/types/global";

export function blockIsTitleAndTextBlock(
  block: Partial<BaseBlock> | ProjectBlock
): block is ITitleAndTextBlock {
  return block.type === ProjectBlockType.TITLE_AND_TEXT;
}

interface TitleAndTextBlockProps {
  block: ITitleAndTextBlock;
}

export const TitleAndTextBlock: React.FC<TitleAndTextBlockProps> = ({
  block,
}) => {
  return (
    <div
      className="project-section"
      style={{ background: block.backgroundColor || "white" }}
    >
      <div className="project-container flex flex-col lg:flex-row">
        <h3 className="lg:w-1/3 font-light text-3xl lg:text-right lg:mr-24">
          {block.title}
        </h3>
        <span className="lg:w-2/3 lg:max-w-2/3 mt-8 lg:mt-0 text-lg">
          <RichText richtext={block.text} />
        </span>
      </div>
    </div>
  );
};
