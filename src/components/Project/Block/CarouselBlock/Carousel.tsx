"use client";

import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import Image from "next/image";

import { ChevronLeftIcon } from "@/icons/ChevronLeft";
import { ChevronRightIcon } from "@/icons/ChevronRight";
import { Image as IImage } from "@/types/global";

import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  images: IImage[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="relative w-screen lg:w-[1025px] mx-auto">
      <ResponsiveCarousel
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
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-screen lg:w-auto aspect-[4/3] lg:aspect-auto lg:h-[620px] lg:max-h-[620px]"
          >
            <Image
              className="z-1 object-cover lg:object-contain"
              alt={img.description || ""}
              src={img.url || ""}
              width={img.details.width || 0}
              height={img.details.height || 0}
              loading="lazy"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};
