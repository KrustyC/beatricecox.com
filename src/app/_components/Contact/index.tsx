"use client";

import { motion, Variants } from "framer-motion";

import { LetsWorkTogether } from "@/components/LetsWorkTogether";

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

export const Contact = () => {
  return (
    <motion.div
      className="bg-black w-full flex flex-col lg:flex-row container-x-padding pt-28 lg:pt-24 pb-12 lg:pb-24 mx-auto gap-12 lg:gap-64 text-left"
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

      <motion.div variants={variants} className="flex-1">
        <LetsWorkTogether />
      </motion.div>
    </motion.div>
  );
};
