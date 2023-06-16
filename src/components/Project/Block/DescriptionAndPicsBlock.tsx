import {
  BaseBlock,
  DescriptionAndPicsBlock as IDescriptionAndPicsBlock,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";
import { isDescriptionEmpty } from "@/utils/content";
import parse from "html-react-parser";
import Image from "next/image";

export function blockIsDescriptionAndPicsBlock(
  block: Partial<BaseBlock> | ProjectBlock
): block is IDescriptionAndPicsBlock {
  return block.type === ProjectBlockType.DESCRIPTION_AND_PICS;
}

interface DescriptionAndPicsBlockProps {
  block: IDescriptionAndPicsBlock;
}

const SingleImage: React.FC<{
  image: string;
}> = ({ image }) => (
  <div className="relative">
    <img
      alt=""
      src={image}
      loading="lazy"
      style={{
        height: "100%",
        width: "100%",
      }}
    />
  </div>
);

const TwoImages: React.FC<{
  images: string[];
  showVertical: boolean;
}> = ({ images, showVertical }) => (
  <div
    className={`grid ${
      showVertical ? "grid-cols-1" : "grid-cols-2"
    } gap-6 lg:gap-12`}
  >
    {images.map((image, i) => (
      <div key={i}>
        <img
          alt=""
          src={image}
          loading="lazy"
          sizes="100vw"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    ))}
  </div>
);

const ThreeImages: React.FC<{
  images: string[];
  showVertical: boolean;
}> = ({ images, showVertical }) => (
  <div
    className={`${
      showVertical ? "flex flex-col gap-y-8" : "grid grid-cols-3 gap-8"
    }`}
  >
    {images.map((image, i) => (
      <div key={i} className="h-[230px] w-full relative">
        <Image
          alt=""
          src={image}
          loading="lazy"
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    ))}
  </div>
);

const FourImages: React.FC<{
  images: string[];
  showVertical: boolean;
}> = ({ images, showVertical }) => (
  <div
    className={`${
      showVertical
        ? "flex flex-col gap-y-8"
        : "grid lg:grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-12"
    }`}
  >
    {images.map((image, i) => (
      <div key={i} className="w-full aspect-square w-full relative">
        <Image
          alt=""
          src={image}
          fill
          loading="lazy"
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    ))}
  </div>
);

export const DescriptionAndPicsBlock: React.FC<
  DescriptionAndPicsBlockProps
> = ({ block }) => {
  const renderImages = (pictures: string[], showVertical: boolean) => {
    const nOfImages = pictures.length;

    if (nOfImages === 1) {
      return <SingleImage image={pictures[0]} />;
    }

    if (nOfImages === 2) {
      return <TwoImages images={pictures} showVertical={showVertical} />;
    }

    if (nOfImages === 3) {
      return <ThreeImages images={pictures} showVertical={showVertical} />;
    }

    if (nOfImages === 4) {
      return <FourImages images={pictures} showVertical={showVertical} />;
    }

    return null;
  };

  console.log(block);

  return (
    <div
      className={`project-section ${
        block.noVerticalPadding ? "no-vertical-padding" : ""
      }`}
      style={{ background: block.backgroundColor || "white" }}
    >
      <div className="project-container flex flex-col">
        {block.title && (
          <h1 className="text-3xl font-medium mb-2">{block.title}</h1>
        )}

        {!isDescriptionEmpty(block.description) && (
          <div className="text-lg font-light mb-8 lg:mb-16">
            {parse(block.description)}
          </div>
        )}

        {renderImages(block.pictures.slice(0, 4), block.showVertical || false)}
      </div>
    </div>
  );
};
