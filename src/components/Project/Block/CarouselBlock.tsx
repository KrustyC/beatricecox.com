import {
  BaseBlock,
  CarouselBlock as ICarouselBlock,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";
import parse from "html-react-parser";
// import Image from "next/image";

export function blockIsCarouselBlock(
  block: Partial<BaseBlock> | ProjectBlock
): block is ICarouselBlock {
  return block.type === ProjectBlockType.CAROUSEL;
}

interface CarouselBlockProps {
  block: ICarouselBlock;
}

// const FourImages: React.FC<{ images: string[] }> = ({ images }) => (
//   <div className="grid grid-cols-2 gap-6">
//     {images.map((image, i) => (
//       <div key={i} className="h-[370px] w-full relative">
//         <div className="image-background" />
//         <Image alt="" layout="fill" objectFit="cover" src={image} />
//       </div>
//     ))}
//   </div>
// );

export const CarouselBlock: React.FC<CarouselBlockProps> = ({ block }) => {
  return (
    <div
      className="project-section"
      style={{ background: block.backgroundColor || "white" }}
    >
      <div className="project-container flex flex-col">
        <div className="flex w-full mb-14">
          <h1 className="text-3xl font-medium w-1/3">{block.title}</h1>
          <div className="text-lg font-light w-2/3">
            {parse(block.description)}
          </div>
        </div>

        <div>CARSOELLO</div>
        {/* {renderImages(block.pictures.slice(0, 4))} */}
      </div>
    </div>
  );
};
