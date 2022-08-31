import {
  BaseBlock,
  TitleAndTextBlock as ITitleAndTextBlock,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";
import parse from "html-react-parser";

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
      <div className="project-container flex">
        <h3 className="w-1/3 font-light text-3xl text-right mr-24">
          {block.title}
        </h3>
        <span className="w-2/3 max-w-2/3">{parse(block.text)}</span>
      </div>
    </div>
  );
};
