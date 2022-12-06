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
import Image from "next/image";

export function blockIsCarouselBlock(
  block: Partial<BaseBlock> | ProjectBlock
): block is ICarouselBlock {
  return block.type === ProjectBlockType.CAROUSEL;
}

interface CarouselBlockProps {
  block: ICarouselBlock;
}

export const CarouselBlock: React.FC<CarouselBlockProps> = ({ block }) => {
  return (
    <div
      className="project-section"
      style={{ background: block.backgroundColor || "white" }}
    >
      <div className="flex flex-col">
        <div className="project-container flex flex-col lg:flex-row w-full mb-14">
          <h1 className="text-3xl font-medium lg:w-1/3">{block.title}</h1>
          <div className="text-lg font-light lg:w-2/3 mt-8 lg:mt-0">
            {parse(block.description)}
          </div>
        </div>

        <div className="relative w-screen lg:w-[1025px] mx-auto">
          <Carousel
            infiniteLoop
            dynamicHeight
            swipeable
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            renderArrowPrev={(clickHandler) => (
              <div
                className="z-50 my-auto absolute left-0 top-0 bottom-0 h-5 cursor-pointer"
                onClick={clickHandler}
              >
                <ChevronLeftIcon className="h-8 w-8 lg:h-16 lg:w-16" />
              </div>
            )}
            renderArrowNext={(clickHandler) => (
              <div
                className="z-50 my-auto absolute right-0 top-0 bottom-0 h-5 cursor-pointer"
                onClick={clickHandler}
              >
                <ChevronRightIcon className="h-8 w-8 lg:h-16 lg:w-16" />
              </div>
            )}
          >
            {block.pictures.map((img, i) => (
              <div
                key={i}
                className="relative h-[320px] lg:h-[520px] lg:max-h-[520px]"
              >
                <Image
                  className="z-1"
                  alt={`Carousel image number ${i + 1}`}
                  src={img}
                  fill
                  loading="lazy"
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
