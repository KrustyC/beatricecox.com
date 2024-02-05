"use client";

import { motion, Variants } from "framer-motion";

import { RichText } from "@/components/Richtext";
import { TitleAndTextBlock as ITitleAndTextBlock } from "@/types/global";

interface TitleAndTextBlockProps {
  block: ITitleAndTextBlock;
}

const titleVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      bounce: 0.3,
      type: "tween",
    },
  },
};

const textVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 40,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

export const TitleAndTextBlock: React.FC<TitleAndTextBlockProps> = ({
  block,
}) => {
  return (
    <div
      className="project-section"
      style={{ background: block.backgroundColor || "white" }}
    >
      <motion.div
        className="project-container flex flex-col lg:flex-row"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
        transition={{ staggerChildren: 0.7 }}
      >
        <h3 className="sr-only">{block.title}</h3>
        <motion.h3
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ staggerChildren: 0.07 }}
          className="lg:w-1/3 font-light text-3xl lg:text-right lg:mr-24"
          aria-hidden
        >
          {block.title.split(" ").map((word, wordIndex) => (
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
        </motion.h3>

        <motion.span
          className="lg:w-2/3 lg:max-w-2/3 mt-8 lg:mt-0 text-lg"
          variants={textVariants}
        >
          <RichText richtext={block.text} />
        </motion.span>
      </motion.div>
    </div>
  );
};
