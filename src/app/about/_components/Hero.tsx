"use client";

import { PortableTextBlock } from "@portabletext/react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

import { RichText } from "@/components/Richtext";

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
  headerText?: PortableTextBlock[];
}

export const AboutHero: React.FC<AboutHeroProps> = ({ headerText }) => {
  return (
    <motion.div
      className="bg-black w-full flex flex-col md:flex-row container-x-padding pt-28 lg:pt-36 pb-12 lg:pb-0 mx-auto gap-12 lg:gap-24 text-left"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ staggerChildren: 0.6 }}
    >
      <motion.div
        variants={variants}
        className="hidden md:flex sm:w-1/2 md:w-1/2 lg:w-1/2 "
      >
        <div className="relative w-full md:h-[520px] lg:h-[720px] rounded-t-2xl">
          <Image
            fill
            className="rounded-t-2xl"
            src="/images/beatricecox.jpg"
            alt="A picture of Beatrice at the sea"
            style={{ objectFit: "cover" }}
          />
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        className="w-full lg:w-1/2 text-lg text-white lg:pt-1"
      >
        <RichText value={headerText} />
      </motion.div>
    </motion.div>
  );
};
