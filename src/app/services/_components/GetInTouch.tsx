"use client";

import { motion, Variants } from "framer-motion";

import { LetsWorkTogether } from "@/components/LetsWorkTogether";

const textVariants: Variants = {
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

const feedbackVariants: Variants = {
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

// const feedbacks = [
//   {
//     text: "Beatrice delivered the perfect deliverables, even ahead of schedule! This will definitely not be the last time working with her.",
//     author: "Stasha Clerk @ Gulp",
//   },
// ];

export const GetInTouch: React.FC = () => {
  return (
    <motion.div
      className="bg-black w-full flex flex-col lg:flex-row container-x-padding py-28 lg:py-36 gap-12"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ staggerChildren: 0.6 }}
    >
      <motion.div variants={textVariants} className="flex-1 md:w-2/3 3xl:w-1/2">
        <LetsWorkTogether />
      </motion.div>

      <motion.div
        variants={feedbackVariants}
        className="w-full md:w-1/3 3xl:w-1/2 3xl:pl-32 text-white"
      >
        <div className="flex flex-col h-full justify-center gap-2">
          <h4 className="text-regular text-white tracking-[.3rem] font-light font-manrope uppercase">
            Feedback
          </h4>
          <p>
            Beatrice delivered the perfect deliverables, even ahead of schedule!
            This will definitely not be the last time working with her.
          </p>
          <span className="text-slate-400">Stasha Clerk @ Gulp</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
