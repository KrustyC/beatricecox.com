"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Project as IProject } from "@/types/global";

interface ProjectsProps {
  project: IProject;
}

const imageVariants: Variants = {
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
      duration: 1.8,
    },
  },
};

const textVariants: Variants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.1, duration: 0.8 },
  },
};

export const Project: React.FC<ProjectsProps> = ({ project }) => {
  const thumbnailImage = project.thumbnailImage;

  return (
    <motion.div
      className="mb-20 lg:mb-24 last:mb-0 flex flex-col"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.3 }}
    >
      {project.comingSoon ? (
        <motion.div className="flex flex-col" variants={imageVariants}>
          <div className="relative">
            <div className="tracking-[0.35em] absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase bg-black text-white text-lg py-3 w-[230px] text-center">
              coming soon
            </div>
            {thumbnailImage && (
              <Image
                src={thumbnailImage.url || ""}
                alt={thumbnailImage.description || ""}
                width={thumbnailImage.details.width}
                height={thumbnailImage.details.height}
              />
            )}
          </div>
          <h3 className="text-3xl font-thin mt-8 text-black">
            {project.title}
          </h3>
        </motion.div>
      ) : (
        <motion.div variants={imageVariants}>
          <Link href={`/projects/${project.slug}`}>
            {thumbnailImage && (
              <Image
                src={thumbnailImage.url || ""}
                alt={thumbnailImage.description || ""}
                width={thumbnailImage.details.width}
                height={thumbnailImage.details.height}
              />
            )}
            <h3 className="text-3xl font-thin cursor-pointer mt-8 text-black">
              {project.title}
            </h3>
          </Link>
        </motion.div>
      )}

      <motion.span
        variants={textVariants}
        className="text-xl text-[#8C8C8C] mt-1"
      >
        {project.categoryText}
      </motion.span>
      {project.intro && (
        <motion.div variants={textVariants} className="mt-4">
          {project.intro}
        </motion.div>
      )}
    </motion.div>
  );
};
