import { useState } from "react";
import { ProjectCategory } from "@/types/app";

interface UseProjectTypeReturn {
  currentFilter?: ProjectCategory;
  onSelectFilter: (filter?: ProjectCategory) => void;
}

export function useCategoriesFilters(): UseProjectTypeReturn {
  const [currentFilter, setCurrentFilter] = useState<ProjectCategory>();
  const onSelectFilter = (filter?: ProjectCategory) => {
    setCurrentFilter(filter);
    document
      .getElementById("projects-container")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    currentFilter,
    onSelectFilter,
  };
}
