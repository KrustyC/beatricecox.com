import { useState } from "react";
import { Filters } from "@/types/app";

interface UseFiltersReturn {
  currentFilter: Filters;
  onSelectFilter: (filter: Filters) => void;
}

export function useFilters(): UseFiltersReturn {
  const [currentFilter, setCurrentFilter] = useState<Filters>(Filters.ALL);
  const onSelectFilter = (filter: Filters) => setCurrentFilter(filter);

  return {
    currentFilter,
    onSelectFilter,
  };
}
