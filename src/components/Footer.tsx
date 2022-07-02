import { InstagramIcon } from "@/components/icons/Instagram";
import { TwitterIcon } from "@/components/icons/Twitter";
import { LinkedInIcon } from "@/components/icons/LinkedIn";
import { INSTAGRAM_LINK, TWITTER_LINK, LINKEDIN_LINK } from "@/utils/constants";

export const Footer: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <div className="flex h-[166px] items-end justify-between py-12 px-24 bg-[#EDB8B8]">
      <div className="flex items-end h-12">
        <span className="text-sm text-[#C89191]">© 2022 Beatrice Cox</span>
      </div>

      <div className="flex items-end h-24">
        <div className="text-right">
          <div className="flex items-center justify-end">
            <a
              className="h-14 w-14 flex justify-center items-center mr-4 rounded-full"
              href={TWITTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="hover:animate-wiggle h-24 w-24 text-[#EDB8B8] fill-[#EDB8B8]" />
            </a>
            <a
              className="bg-[#C89191] h-14 w-14 flex justify-center items-center mr-4 rounded-full"
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="hover:animate-wiggle h-10 w-10 fill-transparent stroke-1 stroke-[#EDB8B8]" />
            </a>

            <a
              className="h-14 w-14 flex justify-center items-center mr-4 rounded-full"
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="hover:animate-wiggle h-24 w-24 text-[#EDB8B8] fill-[#EDB8B8]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
