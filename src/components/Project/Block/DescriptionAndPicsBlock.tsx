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

const TwoImages: React.FC<{ images: string[] }> = ({ images }) => (
  <div className="grid grid-cols-2 gap-2 lg:gap-6">
    {images.map((image, i) => (
      <div key={i} className="relative h-[400px] lg:h-[516px] w-full">
        <div className="image-background" />
        <Image
          alt=""
          src={image}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    ))}
  </div>
);

const ThreeImages: React.FC<{ images: string[] }> = ({ images }) => (
  <div className="flex flex-col gap-y-8">
    {images.map((image, i) => (
      <div key={i} className="h-[230px] w-full relative">
        <div className="image-background" />
        <Image
          alt=""
          src={image}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    ))}
  </div>
);

const FourImages: React.FC<{ images: string[] }> = ({ images }) => (
  <div className="grid lg:grid-cols-2 gap-6">
    {images.map((image, i) => (
      <div key={i} className="h-3[370px] w-full relative">
        <div className="image-background" />
        <Image
          alt=""
          src={image}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    ))}
  </div>
);

export const DescriptionAndPicsBlock: React.FC<
  DescriptionAndPicsBlockProps
> = ({ block }) => {
  const renderImages = (pictures: string[]) => {
    const nOfImages = pictures.length;

    if (nOfImages === 2) {
      return <TwoImages images={pictures} />;
    }

    if (nOfImages === 3) {
      return <ThreeImages images={pictures} />;
    }

    if (nOfImages === 4) {
      return <FourImages images={pictures} />;
    }

    return null;
  };

  return (
    <div
      className="project-section"
      style={{ background: block.backgroundColor || "white" }}
    >
      <div className="project-container flex flex-col">
        <h1 className="text-3xl font-medium mb-4">{block.title}</h1>

        <div className="text-lg font-light mb-16">
          {parse(block.description)}
        </div>

        {renderImages(block.pictures.slice(0, 4))}
      </div>
    </div>
  );
};
