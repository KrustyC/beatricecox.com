import Link from "next/link";
import { BeatriceCoxLogoIcon } from "@/components/icons/BeatriceCoxLogo";
import { InstagramIcon } from "@/components/icons/Instagram";
import { TwitterIcon } from "@/components/icons/Twitter";
import { INSTAGRAM_LINK, TWITTER_LINK } from "@/utils/constants";

const LINKS = [
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    href: "/contacts",
    label: "Contact Us",
  },
  {
    href: "/",
    label: "Volunteer Form",
  },
  {
    href: "/resources",
    label: "Teacher Resources",
  },
];

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#FCFCFC]">
      <div className="p-6 flex justify-between">
        <div>
          <Link href="/">
            <a>
              <BeatriceCoxLogoIcon />
            </a>
          </Link>
        </div>

        <div className="flex flex-col align-right">
          <div className="text-right">
            <div className="flex items-center justify-end">
              <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="hover:animate-wiggle h-6 w-6 fill-gray-400 mr-2" />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="hover:animate-wiggle h-6 w-6 fill-gray-400" />
              </a>
            </div>
          </div>

          <div className="flex flex-col mt-2 items-end text-sm">
            {LINKS.map(({ href, label }, i) => (
              <Link key={i} href={href}>
                <a className="mt-2 text-gray-400">{label}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="px-8 text-xs text-gray-400 border-t-[1px] border-gray-200 py-6">
        © Beatrice Cox 2022{" "}
      </div>
    </div>
  );
};
