"use client";

import classnames from "classnames";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

import { GridBlock as IGridBlock, GridBlockSpacing } from "@/types/global";

interface FullScreenBlockProps {
  block: IGridBlock;
}

const variants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      bounce: 0.2,
      duration: 0.4,
    },
  },
};

export const GridBlock: React.FC<FullScreenBlockProps> = ({ block }) => (
  <div
    className={classnames(
      "flex flex-col items-center px-4 lg:px-12 xl:px-20 2xl:px-32 py-24 max-w-[1600px] mx-auto",
      {
        "gap-y-0.5": block.spacing === GridBlockSpacing.EXTRA_SMALL,
        "gap-y-1": block.spacing === GridBlockSpacing.SMALL,
        "gap-y-2": block.spacing === GridBlockSpacing.MEDIUM,
        "gap-y-4": block.spacing === GridBlockSpacing.LARGE,
        "gap-y-8": block.spacing === GridBlockSpacing.EXTRA_LARGE,
        "gap-y-16": block.spacing === GridBlockSpacing.EXTRA_EXTRA_LARGE,
      }
    )}
  >
    {block.gridImages.map((gridImage, index) => (
      <motion.div
        key={index}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.3 }}
        className={classnames("flex flex-col lg:flex-row justify-around", {
          "gap-0.5": block.spacing === GridBlockSpacing.EXTRA_SMALL,
          "gap-1": block.spacing === GridBlockSpacing.SMALL,
          "gap-2": block.spacing === GridBlockSpacing.MEDIUM,
          "gap-4": block.spacing === GridBlockSpacing.LARGE,
          "gap-8": block.spacing === GridBlockSpacing.EXTRA_LARGE,
          "gap-16": block.spacing === GridBlockSpacing.EXTRA_EXTRA_LARGE,
        })}
      >
        {gridImage.images.map((image, index) => (
          <motion.div key={index} className="relative" variants={variants}>
            <Image
              alt={image.description || ""}
              src={image.url || ""}
              loading="lazy"
              width={image.details.width || 0}
              height={image.details.height || 0}
              style={{
                objectFit: "cover",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    ))}
  </div>
);
