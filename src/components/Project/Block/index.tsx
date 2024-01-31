import { BaseBlock, ProjectBlock } from "@/types/global";

import { blockIsCarouselBlock, CarouselBlock } from "./CarouselBlock";
import {
  blockIsDescriptionAndPicsBlock,
  DescriptionAndPicsBlock,
} from "./DescriptionAndPicsBlock";
import {
  blockIsFourImagesWithTextBlock,
  FourImagesWithTextBlock,
} from "./FourImagesWithTextBlock";
import { blockIsFullScreenBlock, FullScreenBlock } from "./FullScreenBlock";
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

  // if (blockIsDescriptionAndPicsBlock(block)) {
  //   return <DescriptionAndPicsBlock block={block} />;
  // }

  // if (blockIsFourImagesWithTextBlock(block)) {
  //   return <FourImagesWithTextBlock block={block} />;
  // }

  // if (blockIsCarouselBlock(block)) {
  //   return <CarouselBlock block={block} />;
  // }

  if (blockIsFullScreenBlock(block)) {
    return <FullScreenBlock block={block} />;
  }

  return null;
};

export default Block;
