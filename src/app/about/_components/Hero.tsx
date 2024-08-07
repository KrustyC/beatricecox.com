"use client";

import { Document } from "@contentful/rich-text-types";
import { motion, Variants } from "framer-motion";

import { RichText } from "@/components/Richtext";
import { InlineEntryHyperlink } from "@/types/global";

const variants: Variants = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

interface AboutHeroProps {
  headerText: Document;
  links: InlineEntryHyperlink[];
}

export const AboutHero: React.FC<AboutHeroProps> = ({ headerText, links }) => {
  return (
    <motion.div
      className="bg-black w-full flex flex-col lg:flex-row container-x-padding pt-28 lg:pt-36 pb-12 lg:pb-24 mx-auto gap-12 lg:gap-64 text-left"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ staggerChildren: 0.6 }}
    >
      <motion.div
        variants={variants}
        className="w-full lg:w-1/2 text-2xl lg:text-4xl lg:leading-[2.9rem] font-light text-primary"
      >
        Art Direction, Branding, Campaign Strategy, Digital, Identity, Label
        design, Packaging, Print, Social Media, Online Strategy, Web Design,
        Interior Branding and Visualisation, Book Design.
      </motion.div>

      <motion.div
        variants={variants}
        className="w-full lg:w-1/2 text-lg text-white lg:pt-3"
      >
        <RichText richtext={headerText} links={links} />
      </motion.div>
    </motion.div>
  );
};
