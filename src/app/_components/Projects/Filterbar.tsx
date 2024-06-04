"use client";

import { useContext } from "react";
import { motion, Variants } from "framer-motion";

import { ProjectsFilterContext } from "@/contexts/ProjectsFilterContext";
import { ProjectCategory } from "@/types/global";

const EXCLUDED_CATEGORIES = ["ALL", "PACKAGING_AND_UI"];

const mainButtonVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const normalFiltersVariants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      opacity: {
        type: "spring",
        bounce: 0,
        duration: 0.2,
      },
      y: {
        type: "spring",
        bounce: 0.6,
        duration: 2,
      },
    },
  },
};

export const Filterbar: React.FC = () => {
  const { currentFilter, setCurrentFilter } = useContext(ProjectsFilterContext);

  return (
    <div className="sticky top-0 h-28 bg-[#E5E4E2] z-50">
      <motion.div
        className="h-full px-4 md:px-16 lg:px-32 xl:px-60 flex font-light items-center justify-between text-bodoni tracking-wide uppercase overflow-x-auto"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
        transition={{ staggerChildren: 0.4 }}
      >
        <motion.div
          className={`whitespace-nowrap cursor-pointer tracking-[0.35em] animated-filter min-w-fit ${
            currentFilter === undefined ? "active" : ""
          }`}
          variants={mainButtonVariants}
          onClick={() => setCurrentFilter(undefined)}
        >
          All Projects
        </motion.div>
        {Object.entries(ProjectCategory)
          .filter(([key]) => !EXCLUDED_CATEGORIES.includes(key))
          .map(([key, value]) => (
            <motion.div
              key={key}
              className="ml-12 lg:ml-8 xl:ml-0 text-black tracking-[0.35em] cursor-pointer"
              variants={normalFiltersVariants}
              onClick={() => setCurrentFilter(value)}
            >
              <p
                className={`animated-filter transition-all text-base ${
                  currentFilter === value ? "active" : ""
                }`}
              >
                {value}
              </p>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};
