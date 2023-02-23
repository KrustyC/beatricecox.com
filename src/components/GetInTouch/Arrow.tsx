import { useState } from "react";
import { INSTAGRAM_LINK, TWITTER_LINK, LINKEDIN_LINK } from "@/utils/constants";
import { InstagramIcon } from "@/components/icons/Instagram";
import { TwitterIcon } from "@/components/icons/Twitter";
import { LinkedInIcon } from "@/components/icons/LinkedIn";

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
        className={`flex items-center justify-center h-[110px] ${
          showFullWidth ? "w-screen" : "w-[129px]"
        } bg-black transition-all ease duration-500`}
      >
        <span
          className="justify-self-start text-lg tracking-[0.35rem] w-[129px] ml-6 font-normal text-white uppercase align-right leading-6  cursor-pointer"
          onClick={onToggle}
        >
          Get in touch
        </span>

        {showFullWidthContainers && (
          <div className="flex items-center justify-between pl-8 w-full">
            <div className="flex items-center gap-8">
              <a
                className="h-8 w-8 lg:h-14 lg:w-14 flex justify-center items-center rounded-full bg-black"
                href={TWITTER_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="hover:animate-wiggle h-24 w-24 text-black text-white" />
              </a>
              <a
                className="bg-white h-8 w-8 lg:h-14 lg:w-14 flex justify-center items-center rounded-full px-1 md:px-0"
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="hover:animate-wiggle h-10 w-10 fill-transparent stroke-1 stroke-black" />
              </a>

              <a
                className="h-8 w-8 lg:h-14 lg:w-14 flex justify-center items-center rounded-full bg-black"
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="hover:animate-wiggle h-24 w-24 text-white" />
              </a>
            </div>

            <div className="flex items-center w-1/2">
              <p className="text-white text-sm w-full mr-2">
                Welcome to my personal website, I'm an Anglo-Italian who moved
                to London a couple of years ago having graduated as a Product
                Designer from Bologna University with a First Class Degree.
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
          className="h-0 w-0 border-y-[55px] border-y-transparent border-l-[40px] border-[#000000] cursor-pointer"
          onClick={onShowFullWidth}
        />
      )}
    </div>
  );
};
