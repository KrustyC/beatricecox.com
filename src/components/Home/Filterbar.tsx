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
      <div className="h-full px-4 md:px-16 lg:px-32 xl:px-60 flex font-light items-center justify-between text-bodoni tracking-wide uppercase overflow-x-auto">
        <div
          className="whitespace-nowrap cursor-pointer tracking-[0.35em] text-white text-lg xl:text-xl bg-black px-6 py-4"
          onClick={() => onSelectFilter(undefined)}
        >
          All Projects
        </div>
        {Object.entries(ProjectCategory)
          .filter(([key]) => key !== "ALL")
          .map(([key, value]) => (
            <div
              key={key}
              className="ml-12 lg:ml-8 xl:ml-0 text-black tracking-[0.35em] text-lg xl:text-xl cursor-pointer"
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
