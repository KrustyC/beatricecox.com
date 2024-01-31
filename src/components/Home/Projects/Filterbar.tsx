"use client";

import { useContext } from "react";

import { ProjectsFilterContext } from "@/contexts/ProjectsFilterContext";
import { ProjectCategory } from "@/types/global";

const EXCLUDED_CATEGORIES = ["ALL", "PACKAGING_AND_UI"];

export const Filterbar: React.FC = () => {
  const { currentFilter, setCurrentFilter } = useContext(ProjectsFilterContext);

  return (
    <div className="sticky top-0 h-28 bg-[#E5E4E2] z-50">
      <div className="h-full px-4 md:px-16 lg:px-32 xl:px-60 flex font-light items-center justify-between text-bodoni tracking-wide uppercase overflow-x-auto">
        <div
          className={`whitespace-nowrap cursor-pointer tracking-[0.35em] animated-filter min-w-fit ${
            currentFilter === undefined ? "active" : ""
          }`}
          onClick={() => setCurrentFilter(undefined)}
        >
          All Projects
        </div>
        {Object.entries(ProjectCategory)
          .filter(([key]) => !EXCLUDED_CATEGORIES.includes(key))
          .map(([key, value]) => (
            <div
              key={key}
              className="ml-12 lg:ml-8 xl:ml-0 text-black tracking-[0.35em] cursor-pointer"
              onClick={() => setCurrentFilter(value)}
            >
              <p
                className={`animated-filter transition-all text-base ${
                  currentFilter === value ? "active" : ""
                }`}
              >
                {value}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
