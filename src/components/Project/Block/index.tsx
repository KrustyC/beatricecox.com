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
import {
  blockIsFourImagesWithTextBlock,
  FourImagesWithTextBlock,
} from "./FourImagesWithTextBlock";
import { blockIsCarouselBlock, CarouselBlock } from "./CarouselBlock";

interface BlockProps {
  block: Partial<BaseBlock> | ProjectBlock;
}

export const Block: React.FC<BlockProps> = ({ block }) => {
  console.log("BLOCK", block);
  if (blockIsProjectInfoBlock(block)) {
    return <ProjectInfoBlock block={block} />;
  }

  if (blockIsTwoTitlesAndParagraphBlock(block)) {
    return <TwoTitlesAndParagraphBlock block={block} />;
  }

  if (blockIsDescriptionAndPicsBlock(block)) {
    return <DescriptionAndPicsBlock block={block} />;
  }

  if (blockIsFourImagesWithTextBlock(block)) {
    return <FourImagesWithTextBlock block={block} />;
  }

  if (blockIsCarouselBlock(block)) {
    return <CarouselBlock block={block} />;
  }

  return null;
};
