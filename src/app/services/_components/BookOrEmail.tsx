"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

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

export const BookOrEmail: React.FC = () => {
  return (
    <motion.div
      className="bg-black w-full flex flex-col lg:flex-row container-x-padding py-28 lg:py-36 gap-12"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ staggerChildren: 0.6 }}
    >
      <motion.div variants={textVariants} className="flex-2">
        <h3 className="text-5xl font-thin text-primary font-manrope">
          Still don{"'"}t know where to start?
        </h3>
        <h3 className="text-5xl font-thin text-primary font-manrope">
          <Link
            className="font-bold hover:underline"
            target="_blank"
            href="https://calendly.com/beatricecox/30min"
          >
            Book a call
          </Link>{" "}
          or{" "}
          <Link
            className="font-bold hover:underline"
            href="mailto:hello@beatricecox.com"
          >
            email me
          </Link>
        </h3>
      </motion.div>

      <motion.div variants={feedbackVariants} className="flex-1">
        <p className="text-white">
          I{"'"}ll provide an intro of myself and we{"'"}ll have a conversation
          about what your needs are. After this, I{"'"}ll study a project
          proposal outlining the scope, timeline, and cost, so you get a better
          idea of
          <b>what role a designer can play in your reality</b>.
        </p>
      </motion.div>
    </motion.div>
  );
};
