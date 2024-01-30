import parse from "html-react-parser";

import {
  BaseBlock,
  FourImagesWithTextBlock as IFourImagesWithTextBlock,
  ImageWithText as IImageWithText,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";

export function blockIsFourImagesWithTextBlock(
  block: Partial<BaseBlock> | ProjectBlock
): block is IFourImagesWithTextBlock {
  return block.type === ProjectBlockType.FOUR_IMAGES_WITH_TEXT;
}

interface ImageWithTextProps {
  image: IImageWithText;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ image }) => (
  <div className="flex flex-col flex-1 px-8 lg:px-0">
    <div className="px-1 text-center font-thin text-xl">
      {parse(image.text)}
    </div>
    <img
      alt={image.text}
      src={image.img}
      loading="lazy"
      style={{
        height: "100%",
        width: "100%",
      }}
    />
  </div>
);

interface FourImagesWithTextBlockProps {
  block: IFourImagesWithTextBlock;
}

export const FourImagesWithTextBlock: React.FC<
  FourImagesWithTextBlockProps
> = ({ block }) => (
  <div
    className="project-section"
    style={{ background: block.backgroundColor || "white" }}
  >
    <div className="lg:w-[1040px] lg:max-w-[1040px] mx-auto flex flex-col lg:flex-row gap-8">
      <ImageWithText image={block.image1} />
      <ImageWithText image={block.image2} />
      {block.image3 && Object.keys(block.image3).length > 0 && (
        <ImageWithText image={block.image3} />
      )}
      {block.image4 && Object.keys(block.image4).length > 0 && (
        <ImageWithText image={block.image4} />
      )}
    </div>
  </div>
);
