import { CarouselBlock as ICarouselBlock } from "@/types/global";

import { Carousel } from "./Carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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

          {block.description && (
            <div className="text-lg font-light lg:w-2/3 mb-8 lg:mt-0">
              {block.description}
            </div>
          )}
        </div>

        <Carousel images={block.pictures} />
      </div>
    </div>
  );
};
