import { useState } from "react";
import {
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  DRIBBLE_LINK,
  FLICKR_LINK,
} from "@/utils/constants";
import { InstagramIcon } from "@/components/icons/Instagram";
import { LinkedInIcon } from "@/components/icons/LinkedIn";
import { DribbleIcon } from "@/components/icons/Dribble";
import { FlickrIcon } from "@/components/icons/Flickr";

export const Arrow: React.FC = () => {
  const [showFullWidth, setShowFullWidth] = useState(false);
  const [showFullWidthContainers, setShowFullWidthContainers] = useState(false);

  const onShowFullWidth = () => {
    setShowFullWidth(true);

    // when the new item should appear, delay the apperance of the text to avoid ugly layout shifts
    setTimeout(() => {
      setShowFullWidthContainers(true);
    }, 250);
  };

  const onHideFullWidth = () => {
    setShowFullWidthContainers(false);
    setShowFullWidth(false);
  };

  const onToggle = () =>
    showFullWidth ? onHideFullWidth() : onShowFullWidth();

  return (
    <div className="flex">
      <div
        className={`flex items-center justify-center h-[90px] ${
          showFullWidth ? "w-screen" : "w-[129px]"
        } bg-black transition-all ease duration-500`}
      >
        <span
          className="justify-self-start text-sm tracking-[0.30rem] w-[129px] ml-6 font-normal text-white uppercase align-right leading-5  cursor-pointer"
          onClick={onToggle}
        >
          Get in touch
        </span>

        {showFullWidthContainers && (
          <div className="flex items-center justify-between pl-8 w-full">
            <div className="flex items-center gap-8">
              <a
                className="bg-black h-8 w-8 lg:h-14 lg:w-14 flex justify-center items-center rounded-full px-1 md:px-0"
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="hover:animate-wiggle h-8 w-8 lg:h-14 lg:w-14 text-white" />
              </a>

              <a
                className="bg-black h-8 w-8 lg:h-14 lg:w-14 flex justify-center items-center rounded-full px-1 md:px-0"
                href={DRIBBLE_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DribbleIcon className="hover:animate-wiggle h-8 w-8 lg:h-14 lg:w-14 text-white" />
              </a>

              <a
                className="bg-black h-8 w-8 lg:h-14 lg:w-14 flex justify-center items-center rounded-full px-1 md:px-0"
                href={FLICKR_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FlickrIcon className="hover:animate-wiggle h-8 w-8 lg:h-14 lg:w-14 text-white" />
              </a>

              <a
                className="bg-black h-8 w-8 lg:h-14 lg:w-14 flex justify-center items-center rounded-full px-1 md:px-0"
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="hover:animate-wiggle h-8 w-8 lg:h-14 lg:w-14 text-white" />
              </a>
            </div>

            <div className="flex items-center w-1/2">
              <p className="text-white text-sm w-full mr-2">
                Welcome to my personal website, I{"'"}m an Anglo-Italian who
                moved to London a couple of years ago having graduated as a
                Product Designer from Bologna University with a First Class
                Degree.
              </p>
              <div
                className="h-0 w-0 border-y-[55px] border-y-transparent border-r-[40px] border-red cursor-pointer"
                onClick={onHideFullWidth}
              />
            </div>
          </div>
        )}
      </div>
      {!showFullWidthContainers && (
        <div
          className="h-0 w-0 border-y-[45px] border-y-transparent border-l-[40px] border-black cursor-pointer"
          onClick={onShowFullWidth}
        />
      )}
    </div>
  );
};
