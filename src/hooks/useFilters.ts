import { useState } from "react";
import { ProjectCategory } from "@/types/app";

interface UseProjectTypeReturn {
  currentFilter?: ProjectCategory;
  onSelectFilter: (filter: ProjectCategory) => void;
}

export function useFilters(): UseProjectTypeReturn {
  const [currentFilter, setCurrentFilter] = useState<ProjectCategory>();
  const onSelectFilter = (filter: ProjectCategory) => setCurrentFilter(filter);

  return {
    currentFilter,
    onSelectFilter,
  };
}
