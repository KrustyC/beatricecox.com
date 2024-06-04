import {
  BaseBlock,
  CarouselBlock as ICarouselBlock,
  FullScreenBlock as IFullScreenBlock,
  GridBlock as IGridBlock,
  ProjectBlock,
  ProjectBlockType,
  ProjectInfoBlock as IProjectInfoBlock,
  TitleAndTextBlock as ITitleAndTextBlock,
  TwoTitlesAndParagraphBlock as ITwoTitlesAndParagraphBlock,
} from "@/types/global";

import { CarouselBlock } from "./CarouselBlock";
import { FullScreenBlock } from "./FullScreenBlock";
import { GridBlock } from "./GridBlock";
import { ProjectInfoBlock } from "./ProjectInfoBlock";
import { TitleAndTextBlock } from "./TitleAndTextBlock";
import { TwoTitlesAndParagraphBlock } from "./TwoTitlesAndParagraphBlock";

interface BlockProps {
  block: Partial<BaseBlock> | ProjectBlock;
}

function blockIs<T extends BaseBlock>(
  block: Partial<BaseBlock>,
  type: T["type"]
): block is T {
  return block.type === type;
}

const Block: React.FC<BlockProps> = ({ block }) => {
  if (blockIs<IProjectInfoBlock>(block, ProjectBlockType.PROJECT_INFO)) {
    return <ProjectInfoBlock block={block} />;
  }

  if (
    blockIs<ITwoTitlesAndParagraphBlock>(
      block,
      ProjectBlockType.TWO_TITLES_AND_PARAGRAPH
    )
  ) {
    return <TwoTitlesAndParagraphBlock block={block} />;
  }

  if (blockIs<ITitleAndTextBlock>(block, ProjectBlockType.TITLE_AND_TEXT)) {
    return <TitleAndTextBlock block={block} />;
  }

  if (blockIs<IGridBlock>(block, ProjectBlockType.GRID_BLOCK)) {
    return <GridBlock block={block} />;
  }

  if (blockIs<ICarouselBlock>(block, ProjectBlockType.CAROUSEL)) {
    return <CarouselBlock block={block} />;
  }

  if (blockIs<IFullScreenBlock>(block, ProjectBlockType.FULL_SCREEN)) {
    return <FullScreenBlock block={block} />;
  }

  return null;
};

export default Block;
