import { BaseBlock, ProjectBlock } from "@/types/global";

import { blockIsCarouselBlock, CarouselBlock } from "./CarouselBlock";
import { blockIsFullScreenBlock, FullScreenBlock } from "./FullScreenBlock";
import { blockIsGridBlock, GridBlock } from "./GridBlock";
import { blockIsProjectInfoBlock, ProjectInfoBlock } from "./ProjectInfoBlock";
import {
  blockIsTitleAndTextBlock,
  TitleAndTextBlock,
} from "./TitleAndTextBlock";
import {
  blockIsTwoTitlesAndParagraphBlock,
  TwoTitlesAndParagraphBlock,
} from "./TwoTitlesAndParagraphBlock";

interface BlockProps {
  block: Partial<BaseBlock> | ProjectBlock;
}

const Block: React.FC<BlockProps> = ({ block }) => {
  if (blockIsProjectInfoBlock(block)) {
    return <ProjectInfoBlock block={block} />;
  }

  if (blockIsTwoTitlesAndParagraphBlock(block)) {
    return <TwoTitlesAndParagraphBlock block={block} />;
  }

  if (blockIsTitleAndTextBlock(block)) {
    return <TitleAndTextBlock block={block} />;
  }

  if (blockIsGridBlock(block)) {
    return <GridBlock block={block} />;
  }

  if (blockIsCarouselBlock(block)) {
    return <CarouselBlock block={block} />;
  }

  if (blockIsFullScreenBlock(block)) {
    return <FullScreenBlock block={block} />;
  }

  return null;
};

export default Block;
