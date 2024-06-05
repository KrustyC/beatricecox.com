"use client";

import { motion, Variants } from "framer-motion";

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

export const GetInTouch: React.FC = () => {
  return (
    <motion.div
      className="bg-[#272727] w-full flex container-x-padding py-28 lg:py-36"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ staggerChildren: 0.6 }}
    >
      <motion.div variants={textVariants} className="flex-1">
        <div className="flex flex-col gap-5 w-full md:w-2/3">
          <h3 className="text-4xl font-bodoni font-thin text-primary">
            Let{"'"}s work together.
          </h3>

          <div className="text-lg text-white font-thin lg:w-4/5">
            If you like the look of the projects I{"'"}ve worked on or would
            like to collaborate on something together, and would like to get in
            touch, I would love to hear from you! Please feel free to book a
            call or email me.
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={feedbackVariants}
        className="w-full md:w-1/3 text-white"
      >
        {/* <RichText richtext={headerText} links={links} /> */}
        <div className="flex flex-col h-full justify-center gap-2">
          <h4
            className={
              "text-regular text-white tracking-[.3rem] font-light font-manrope uppercase"
            }
          >
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
