"use client";

import { motion, Variants } from "framer-motion";

import { TwoTitlesAndParagraphBlock as ITwoTitlesAndParagraphBlock } from "@/types/global";

interface ParagraphProps {
  mb?: string;
  paragraph: Partial<{
    title: string;
    paragraph: string;
  }>;
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

const Paragraph: React.FC<ParagraphProps> = ({ paragraph, mb = "" }) => (
  <motion.div
    className={`flex ${mb} flex-col lg:flex-row`}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.7 }}
  >
    {paragraph.title && (
      <>
        <h3 className="sr-only">{paragraph.title}</h3>
        <motion.h3
          aria-hidden
          className="lg:w-1/3 font-light text-3xl lg:text-right lg:mr-24"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ staggerChildren: 0.07 }}
        >
          {paragraph.title.split(" ").map((word, wordIndex) => (
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
      </>
    )}
    <motion.div
      className="lg:w-2/3 lg:max-w-2/3 text-lg mt-4 lg:mt-0"
      variants={textVariants}
    >
      {paragraph.paragraph}
    </motion.div>
  </motion.div>
);

interface TwoTitlesAndParagraphBlockProps {
  block: ITwoTitlesAndParagraphBlock;
}

export const TwoTitlesAndParagraphBlock: React.FC<
  TwoTitlesAndParagraphBlockProps
> = ({ block }) => {
  return (
    <div
      className="project-section"
      style={{ background: block.backgroundColor || "white" }} // @TODO Implement in B
    >
      <div className="project-container flex flex-col">
        {block.firstItem && (
          <Paragraph mb="mb-10" paragraph={block.firstItem} />
        )}

        {block.secondItem && <Paragraph paragraph={block.secondItem} />}
      </div>
    </div>
  );
};
