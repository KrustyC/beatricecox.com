import { ProjectCategory } from "@/types/app";

interface FilterbarProps {
  currentFilter?: ProjectCategory;
  onSelectFilter: (filter?: ProjectCategory) => void;
}

export const Filterbar: React.FC<FilterbarProps> = ({
  currentFilter,
  onSelectFilter,
}) => {
  return (
    <div className="sticky top-0 h-28 bg-[#E5E4E2] z-50">
      <div className="h-full px-60 flex font-light items-center justify-between text-bodoni tracking-wide uppercase">
        <div
          className="cursor-pointer tracking-wide text-white text-xl bg-black px-6 py-2"
          onClick={() => onSelectFilter(undefined)}
        >
          All Projects
        </div>
        {Object.entries(ProjectCategory)
          .filter(([key]) => key !== "ALL")
          .map(([key, value]) => (
            <div
              key={key}
              className="text-black tracking-wide text-xl cursor-pointer"
              onClick={() => onSelectFilter(value)}
            >
              <p
                className={`animated-filter ${
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
