import { BaseBlock, ProjectBlock } from "@/types/global";

import { blockIsProjectInfoBlock, ProjectInfoBlock } from "./ProjectInfoBlock";
import {
  blockIsTwoTitlesAndParagraphBlock,
  TwoTitlesAndParagraphBlock,
} from "./TwoTitlesAndParagraphBlock";
import {
  blockIsDescriptionAndPicsBlock,
  DescriptionAndPicsBlock,
} from "./DescriptionAndPicsBlock";

interface BlockProps {
  block: Partial<BaseBlock> | ProjectBlock;
}

export const Block: React.FC<BlockProps> = ({ block }) => {
  if (blockIsProjectInfoBlock(block)) {
    return <ProjectInfoBlock block={block} />;
  }

  if (blockIsTwoTitlesAndParagraphBlock(block)) {
    return <TwoTitlesAndParagraphBlock block={block} />;
  }

  if (blockIsDescriptionAndPicsBlock(block)) {
    return <DescriptionAndPicsBlock block={block} />;
  }

  return null;
};
