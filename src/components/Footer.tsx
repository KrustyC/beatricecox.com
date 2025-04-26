"use client";

import { motion, Variants } from "framer-motion";

import { DribbleIcon } from "@/icons/Dribble";
import { FlickrIcon } from "@/icons/Flickr";
import { InstagramIcon } from "@/icons/Instagram";
import { LinkedInIcon } from "@/icons/LinkedIn";
import {
  DRIBBLE_LINK,
  FLICKR_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
} from "@/utils/constants";

const iconsVariants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        type: "spring",
        bounce: 0.8,
        duration: 3,
      },
      opacity: {
        bounce: 0,
        duration: 0.3,
      },
    },
  },
};

export const Footer: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <div className="flex h-[136px] lg:h-[166px] flex-col-reverse lg:flex-row items-center justify-center lg:items-end lg:justify-between py-12 px-8 md:px-16 lg:px-24 bg-primary">
      <div className="flex lg:items-end h-12">
        <span className="text-sm text-[#C89191]">© 2025 Beatrice Cox</span>
      </div>

      <div className="flex items-center lg:items-end h-24 mb-2 lg:mb-0">
        <div className="text-right">
          <motion.div
            className="flex items-center justify-end"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ staggerChildren: 0.4 }}
          >
            <motion.a
              variants={iconsVariants}
              className="bg-primary h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full px-1 md:px-0"
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-[#C89191]" />
            </motion.a>

            <motion.a
              variants={iconsVariants}
              className="bg-primary h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full px-1 md:px-0"
              href={DRIBBLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DribbleIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-[#C89191]" />
            </motion.a>

            <motion.a
              variants={iconsVariants}
              className="bg-primary h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full px-1 md:px-0"
              href={FLICKR_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FlickrIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-[#C89191]" />
            </motion.a>

            <motion.a
              variants={iconsVariants}
              className="bg-primary h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center rounded-full px-1 md:px-0"
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-[#C89191]" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
