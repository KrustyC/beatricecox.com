"use client";

import { motion, Variants } from "framer-motion";

import { RichText } from "@/components/Richtext";
import { ProjectInfoBlock as IProjectInfoBlock } from "@/types/global";

const variants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 3.3,
      y: {
        type: "spring",
        duration: 1.3,
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
};

interface LineProps {
  title: string;
  value: string;
}

const Line: React.FC<LineProps> = ({ title, value }) => (
  <motion.div
    className="flex flex-col lg:flex-row lg:justify-between lg:items-center border-t-2 border-black py-4"
    variants={variants}
  >
    <span className="uppercase tracking-[.30rem]">{title}</span>
    <span className="mt-3 lg:mt-0">{value}</span>
  </motion.div>
);

interface ProjectInfoBlockProps {
  block: IProjectInfoBlock;
}

export const ProjectInfoBlock: React.FC<ProjectInfoBlockProps> = ({
  block,
}) => {
  return (
    <div className="project-section bg-white">
      <motion.div
        className="project-container flex flex-col"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h1
          className="text-3xl lg:text-4xl font-medium mb-1"
          variants={variants}
        >
          {block.title}
        </motion.h1>

        {block.subtitle && (
          <motion.span
            className="text-lg lg:text-xl font-light text-[#8C8C8C] mb-6 leading-snug"
            variants={variants}
          >
            {block.subtitle}
          </motion.span>
        )}

        {block.description && (
          <motion.div
            className="text-lg lg:text-xl font-light mb-8"
            variants={variants}
          >
            <RichText richtext={block.description} />
          </motion.div>
        )}

        {block.info.team && <Line title="Team" value={block.info.team} />}

        {block.info.client && <Line title="Client" value={block.info.client} />}

        {block.info.role && <Line title="role" value={block.info.role} />}

        {block.info.skills && <Line title="skills" value={block.info.skills} />}
      </motion.div>
    </div>
  );
};
