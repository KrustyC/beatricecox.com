"use client";

import { ProjectCategory } from "@/types/global";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface IProjectsFilterContext {
  currentFilter?: ProjectCategory;
  setCurrentFilter: (filter?: ProjectCategory) => void;
}

export const ProjectsFilterContext = createContext<IProjectsFilterContext>({
  currentFilter: undefined,
  setCurrentFilter: () => {},
});

export const useProjectsFilter = () => useContext(ProjectsFilterContext);

export const ProjectsFilterContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [currentFilter, setCurrentFilter] = useState<
    ProjectCategory | undefined
  >(undefined);

  const value = {
    currentFilter,
    setCurrentFilter,
  };

  return (
    <ProjectsFilterContext.Provider value={value}>
      {children}
    </ProjectsFilterContext.Provider>
  );
};
