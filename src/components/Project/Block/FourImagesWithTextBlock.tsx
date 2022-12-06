import {
  BaseBlock,
  FourImagesWithTextBlock as IFourImagesWithTextBlock,
  ImageWithText as IImageWithText,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";
import parse from "html-react-parser";
import Image from "next/image";

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
    <div className="h-[320px] lg:h-[427px] relative w-full mb-4">
      <div className="image-background" />
      <Image
        alt=""
        src={image.img}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <div className="px-1 text-center font-thin text-xl">
      {parse(image.text)}
    </div>
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
      <ImageWithText image={block.image3} />
      <ImageWithText image={block.image4} />
    </div>
  </div>
);
