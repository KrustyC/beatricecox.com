import { Project } from "@/types/global";
import { ProjectCategory } from "@/types/app";

interface UseProjectArgs {
  projects: Project[];
  currentFilter?: ProjectCategory;
}

type ProjectsColumn = [Project[], Project[]];

export function useProjectsWithFilter({
  projects,
  currentFilter,
}: UseProjectArgs): ProjectsColumn {
  return projects
    .filter(({ category }) => {
      if (!currentFilter) {
        return true;
      }

      return category === currentFilter;
    })
    .reduce(
      (acc, current, i) => {
        if (i % 2 === 0) {
          return [[...acc[0], current], acc[1]] as ProjectsColumn;
        }

        return [acc[0], [...acc[1], current]] as ProjectsColumn;
      },
      [[], []] as ProjectsColumn
    );
}
