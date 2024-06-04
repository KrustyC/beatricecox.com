"use client";

import { motion, Variants } from "framer-motion";

const titleVariants: Variants = {
  offscreen: {
    x: -20,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const textVariants: Variants = {
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

const buttonVariants: Variants = {
  offscreen: {
    scale: 0.5,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

export const Blog = () => (
  <div className="flex justify-start bg-home-pattern bg-fixed bg-no-repeat bg-cover bg-center h-[400px] lg:h-[600px] w-full">
    <div className="flex items-center text-white bg-gradient-to-r from-black px-8 md:px-16 lg:px-32 xl:px-60">
      <motion.div
        className="w-full lg:w-2/3"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h1
          variants={titleVariants}
          className="mb-4 text-white font-semibold text-5xl"
        >
          Blog
        </motion.h1>
        <motion.p variants={textVariants} className="my-3 w-full lg:w-4/6 mb-8">
          Currently travelling the globe and writing a few stories on my
          whereabouts and experiences, please feel free to come and see what it
          {"'"}s about.
        </motion.p>
        <motion.a
          variants={buttonVariants}
          href="http://thescrapbookers.blog"
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-[0.35em] uppercase bg-white text-black px-4 py-3"
        >
          Visit now
        </motion.a>
      </motion.div>
    </div>
  </div>
);
