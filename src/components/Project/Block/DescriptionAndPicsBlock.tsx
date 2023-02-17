import {
  BaseBlock,
  DescriptionAndPicsBlock as IDescriptionAndPicsBlock,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";
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
  <div className="flex grid-cols-2 gap-6 lg:gap-6">
    <div className="relative h-[330px] lg:h-[516px] w-full">
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
  </div>
);

const TwoImages: React.FC<{
  images: string[];
  showVertical: boolean;
}> = ({ images, showVertical }) => (
  <div
    className={`grid ${
      showVertical ? "grid-cols-1" : "grid-cols-2"
    } gap-6 lg:gap-6`}
  >
    {images.map((image, i) => (
      <div key={i} className="relative h-[330px] lg:h-[516px] w-full">
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
      showVertical ? "flex flex-col gap-y-8" : "grid lg:grid-cols-2 gap-6"
    }`}
  >
    {images.map((image, i) => (
      <div key={i} className="h-[370px] w-full relative">
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
    console.log(nOfImages, showVertical);
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

  return (
    <div
      className="project-section"
      style={{ background: block.backgroundColor || "white" }}
    >
      <div className="project-container flex flex-col">
        {block.title && (
          <h1 className="text-3xl font-medium mb-2">{block.title}</h1>
        )}

        {block.description && (
          <div className="text-lg font-light mb-8">
            {parse(block.description)}
          </div>
        )}

        {renderImages(block.pictures.slice(0, 4), block.showVertical || false)}
      </div>
    </div>
  );
};
