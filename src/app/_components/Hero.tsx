"use client";

import { motion, Variants } from "framer-motion";

import { HomepageCopy } from "@/types/global";

import { RichText } from "../../components/Richtext";

interface HeroProps {
  homepageCopy: Partial<HomepageCopy>;
}

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

export const Hero: React.FC<HeroProps> = ({ homepageCopy }) => (
  <div className="bg-primary flex flex-col">
    <div className="w-full flex container-x-padding pt-28 lg:pt-40 pb-12 lg:pb-24 mx-auto">
      <motion.div
        className="flex flex-col mx-auto text-left text-black"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {homepageCopy.quote && (
          <motion.div className="mb-3 text-sm" variants={variants}>
            <RichText richtext={homepageCopy.quote.json} />
          </motion.div>
        )}

        {homepageCopy.mainText && (
          <motion.div
            className="w-full md:w-3/4 leading-[1.9rem] md:leading-[2.5rem] text-xl md:text-3xl font-[500] lg:font-[400]"
            variants={variants}
          >
            <RichText richtext={homepageCopy.mainText.json} />
          </motion.div>
        )}
      </motion.div>
    </div>
  </div>
);
