import { InstagramIcon } from "@/components/icons/Instagram";
import { LinkedInIcon } from "@/components/icons/LinkedIn";
import {
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  DRIBBLE_LINK,
  FLICKR_LINK,
} from "@/utils/constants";
import { DribbleIcon } from "./icons/Dribble";
import { FlickrIcon } from "./icons/Flickr";

export const Footer: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <div className="flex h-[136px] lg:h-[166px] flex-col-reverse lg:flex-row items-center justify-center lg:items-end lg:justify-between py-12 px-8 md:px-16 lg:px-24 bg-[#EDB8B8]">
      <div className="flex lg:items-end h-12">
        <span className="text-sm text-[#C89191]">© 2024 Beatrice Cox</span>
      </div>

      <div className="flex items-center lg:items-end h-24 mb-2 lg:mb-0">
        <div className="text-right">
          <div className="flex items-center justify-end">
            <a
              className="bg-[#EDB8B8] h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full px-1 md:px-0"
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-[#C89191]" />
            </a>

            <a
              className="bg-[#EDB8B8] h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full px-1 md:px-0"
              href={DRIBBLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DribbleIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-[#C89191]" />
            </a>

            <a
              className="bg-[#EDB8B8] h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full px-1 md:px-0"
              href={FLICKR_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FlickrIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-[#C89191]" />
            </a>

            <a
              className="bg-[#EDB8B8] h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center rounded-full px-1 md:px-0"
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-[#C89191]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
