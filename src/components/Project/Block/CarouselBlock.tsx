/* eslint-disable @next/next/no-img-element */
import {
  BaseBlock,
  CarouselBlock as ICarouselBlock,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";
import parse from "html-react-parser";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ChevronLeftIcon } from "@/components/icons/ChevronLeft";
import { ChevronRightIcon } from "@/components/icons/ChevronRight";

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
      <div className="flex flex-col">
        <div className="project-container flex w-full mb-14">
          <h1 className="text-3xl font-medium w-1/3">{block.title}</h1>
          <div className="text-lg font-light w-2/3">
            {parse(block.description)}
          </div>
        </div>

        <div className="relative w-[1025px] mx-auto">
          <Carousel
            infiniteLoop
            dynamicHeight
            showThumbs={false}
            showIndicators={false}
            renderArrowPrev={(clickHandler) => (
              <div
                className="z-50 my-auto absolute left-0 top-0 bottom-0 h-5 cursor-pointer"
                onClick={clickHandler}
              >
                <ChevronLeftIcon className="h-16 w-16" />
              </div>
            )}
            renderArrowNext={(clickHandler) => (
              <div
                className="z-50 my-auto absolute right-0 top-0 bottom-0 h-5 cursor-pointer"
                onClick={clickHandler}
              >
                <ChevronRightIcon className="h-16 w-16" />
              </div>
            )}
          >
            {block.pictures.map((img, i) => (
              <div key={i}>
                <img
                  className="h-[488px] max-h-[488px] max-w-[599px] object-contain"
                  src={img}
                  alt={`Carousel image number ${i + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
