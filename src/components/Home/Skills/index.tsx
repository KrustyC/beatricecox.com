"use client";

import { motion, Variants } from "framer-motion";

import { CirclesLogo } from "@/icons/CirclesLogo";

import { SKILLS, SOFTWARES } from "./skills";

const variants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export const Skills = () => (
  <div className="bg-[#FFB649] flex flex-col px-8 md:px-16 lg:px-32 xl:px-60 py-12 lg:py-24 relative">
    <div className="flex items-center justify-between overflow-hidden">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col"
      >
        <motion.h1 variants={variants} className="font-semibold text-5xl">
          Expertise
        </motion.h1>

        <div className="mt-8 w-screen overflow-x-scroll lg:w-auto">
          <div className="flex">
            <motion.div
              className="flex flex-col"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.span
                className="tracking-wider font-thin"
                variants={variants}
              >
                SOFTWARE
              </motion.span>

              {SOFTWARES.map((software, i) => (
                <motion.span
                  key={i}
                  className="mt-2 text-sm md:text-base"
                  variants={variants}
                >
                  {software}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col ml-12 md:ml-20"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.span
                className="tracking-wider font-thin"
                variants={variants}
              >
                SKILLS
              </motion.span>

              {SKILLS.map((skill, i) => (
                <motion.span
                  key={i}
                  className="mt-2 text-sm md:text-base"
                  variants={variants}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="hidden xl:block">
        <CirclesLogo />
      </div>
    </div>
  </div>
);
