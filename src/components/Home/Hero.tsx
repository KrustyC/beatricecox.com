"use client";

import { motion, Variants } from "framer-motion";

import { Navbar } from "../Navbar";

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

export const Hero = () => (
  <div className="bg-[#EDB8B8] flex flex-col">
    <Navbar />
    <div className="w-full flex px-8 md:px-16 lg:px-32 xl:px-60 pt-12 lg:pt-28 pb-12 lg:pb-24 mx-auto">
      <motion.div
        className="flex flex-col mx-auto text-left text-black"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.p className="block lg:hidden mb-4 text-sm" variants={variants}>
          Have no fear of perfection
          <br />— you{"'"}ll never reach it. {"–"} Salvador Dali
        </motion.p>
        <motion.p
          className="lg:mb-4 hidden lg:block text-sm"
          variants={variants}
        >
          Have no fear of perfection—you{"'"}ll never reach it.
          {"–"} Salvador Dali
        </motion.p>
        <motion.div
          className="w-full md:w-3/4 leading-[1.9rem] md:leading-[2.5rem] text-xl md:text-3xl font-[500] lg:font-[400]"
          variants={variants}
        >
          <p>
            Working in multidisciplinary environments and different design areas
            including: 2D/3D graphics, 3D interiors and UX/UI strategy. I{"'"}m
            a true believer in working ways around things to try and make them
            environmentally less impactful, more ethical and always try to be
            aware of the bigger picture.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </div>
);
