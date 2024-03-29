"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

import { CONTRA_LINK } from "@/utils/constants";

const titleVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      bounce: 0.5,
      type: "tween",
    },
  },
};

export const Navbar: React.FC = () => {
  return (
    <div className="absolute top-0 right-0 left-0 w-screen flex justify-between items-center py-10 px-8 md:px-16 lg:px-32 xl:px-48 z-50 bg-transparent">
      <div className="flex items-center">
        <Link href="/">
          <span className="sr-only">Beatrice Duguid Cox</span>
          <motion.span
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ staggerChildren: 0.05 }}
            className="text-black text-2xl lg:text-4xl font-bodoni"
            aria-hidden
          >
            {"Beatrice Duguid Cox".split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={titleVariants}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </motion.span>
        </Link>
      </div>

      <div className="hidden md:flex items-center">
        <motion.a
          href={CONTRA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase whitespace-nowrap cursor-pointer tracking-[0.35em] text-white text-sm bg-black px-6 py-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          view services
        </motion.a>
      </div>
    </div>
  );
};
