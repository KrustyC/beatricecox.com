/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import parse from "html-react-parser";
import Image from "next/image";

import { ChevronLeftIcon } from "@/icons/ChevronLeft";
import { ChevronRightIcon } from "@/icons/ChevronRight";
import {
  BaseBlock,
  CarouselBlock as ICarouselBlock,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";
import { isDescriptionEmpty } from "@/utils/content";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
      className="project-section lg:pb-16 lg:pt-28"
      style={{ background: block.backgroundColor || "white" }}
    >
      <div className="flex flex-col">
        <div className="project-container flex flex-col lg:flex-row w-full">
          {block.title && (
            <h1 className="text-3xl font-medium lg:w-1/3 mb-4 lg:mb-12">
              {block.title}
            </h1>
          )}
          {!isDescriptionEmpty(block.description) && (
            <div className="text-lg font-light lg:w-2/3 mb-8 lg:mt-0">
              {parse(block.description)}
            </div>
          )}
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
                className="relative w-screen lg:w-auto aspect-[4/3] lg:aspect-auto lg:h-[620px] lg:max-h-[620px]"
                // className="relative h-[320px] lg:h-[620px] lg:max-h-[620px]"
              >
                <Image
                  className="z-1 object-cover lg:object-contain"
                  alt={`Carousel image number ${i + 1}`}
                  src={img}
                  fill
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
