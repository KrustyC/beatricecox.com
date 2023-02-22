import { InstagramIcon } from "@/components/icons/Instagram";
import { TwitterIcon } from "@/components/icons/Twitter";
import { LinkedInIcon } from "@/components/icons/LinkedIn";
import { INSTAGRAM_LINK, TWITTER_LINK, LINKEDIN_LINK } from "@/utils/constants";

export const Footer: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <div className="flex h-[136px] lg:h-[166px] flex-col-reverse lg:flex-row items-center justify-center lg:items-end lg:justify-between py-12 px-8 md:px-16 lg:px-24 bg-[#EDB8B8]">
      <div className="flex lg:items-end h-12">
        <span className="text-sm text-[#C89191]">© 2022 Beatrice Cox</span>
      </div>

      <div className="flex items-center lg:items-end h-24 mb-2 lg:mb-0">
        <div className="text-right">
          <div className="flex items-center justify-end">
            <a
              className="bg-[#EDB8B8] h-8 w-8 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full"
              href={TWITTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="hover:animate-wiggle h-24 w-24 text-[#C89191] fill-[#C89191]" />
            </a>
            <a
              className="bg-[#C89191] h-8 w-8 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full px-1 md:px-0"
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="hover:animate-wiggle h-10 w-10 fill-transparent stroke-1 stroke-[#EDB8B8]" />
            </a>

            <a
              className="bg-[#EDB8B8] h-8 w-8 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full"
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="hover:animate-wiggle h-24 w-24 text-[#C89191] fill-[#C89191]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
