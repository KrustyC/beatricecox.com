import { ProjectCategory } from "@/types/global";
import { Project } from "@/types/global";

interface UseProjectArgs {
  projects: Partial<Project>[];
  currentFilter?: ProjectCategory;
}

type ProjectsColumn = [Project[], Project[]];

const MULTI_CATEGORIES_MAP: Record<string, string[]> = {
  [ProjectCategory.PACKAGING_AND_UI]: [
    ProjectCategory.PACKAGING,
    ProjectCategory.UX_UI,
  ],
};

export function useProjectsWithFilter({
  projects,
  currentFilter,
}: UseProjectArgs): ProjectsColumn {
  console.log(projects, currentFilter);

  return projects
    .filter(({ category }) => {
      if (!currentFilter) {
        return true;
      }

      if (!category) {
        return false;
      }

      if (category in MULTI_CATEGORIES_MAP) {
        return MULTI_CATEGORIES_MAP[category].includes(currentFilter);
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
