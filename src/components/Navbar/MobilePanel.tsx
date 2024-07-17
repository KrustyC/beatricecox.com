"use client";

import { DisclosureButton } from "@headlessui/react";
import { useLockBodyScroll } from "@uidotdev/usehooks";
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

import { LINKS } from "./links";

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

export const MobilePanel: React.FC = () => {
  useLockBodyScroll();

  return (
    <div className="bg-black h-screen space-y-1 px-2 pb-3 pt-2 flex flex-col justify-between overflow-hidden">
      <div className="mt-32 flex flex-col gap-4 items-center">
        {LINKS.map(({ label, href }) => (
          <DisclosureButton
            key={href}
            as="a"
            href={href}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 font-medium text-xl"
          >
            {label}
          </DisclosureButton>
        ))}
      </div>

      <div className="h-20 flex items-center justify-center">
        <motion.div
          className="flex items-center justify-end"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ staggerChildren: 0.4 }}
        >
          <motion.a
            variants={iconsVariants}
            className="bg-black h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full px-1 md:px-0"
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-white" />
          </motion.a>

          <motion.a
            variants={iconsVariants}
            className="bg-black h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full px-1 md:px-0"
            href={DRIBBLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DribbleIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-white" />
          </motion.a>

          <motion.a
            variants={iconsVariants}
            className="bg-black h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center mr-2 lg:mr-4 rounded-full px-1 md:px-0"
            href={FLICKR_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FlickrIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-white" />
          </motion.a>

          <motion.a
            variants={iconsVariants}
            className="bg-black h-10 w-10 lg:h-14 lg:w-14 flex justify-center items-center rounded-full px-1 md:px-0"
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="hover:animate-wiggle h-10 w-10 lg:h-14 lg:w-14 text-white" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
