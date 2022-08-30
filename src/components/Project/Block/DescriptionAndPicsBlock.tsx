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

// const SIZE_TO_CLASS_NAME = {
//   2: "grid-two-items",
//   3: "grid-",
//   2: "",
// };

const FourImages: React.FC<{ images: string[] }> = ({ images }) => (
  <div className="grid grid-cols-2 gap-6">
    {/* {images.map((image, i) => (
      <div key={i} className>
        <Image
          alt=""
          width="385px"
          height="337px"
          objectFit="cover"
          src={image}
        />
      </div>
    ))} */}
    {images.map((image, i) => (
      <div key={i} className="h-full w-full">
        <Image
          alt=""
          width="385px"
          height="385px"
          objectFit="cover"
          src={image}
        />
      </div>
    ))}
  </div>
);

export const DescriptionAndPicsBlock: React.FC<
  DescriptionAndPicsBlockProps
> = ({ block }) => {
  return (
    <div
      className="project-section"
      style={{ background: block.backgroundColor || "white" }}
    >
      <div className="project-container flex flex-col">
        <h1 className="text-3xl font-medium mb-6">{block.title}</h1>

        <div className="text-lg font-light mb-12">
          {parse(block.description)}
        </div>

        <FourImages images={block.pictures} />
      </div>
    </div>
  );
};
