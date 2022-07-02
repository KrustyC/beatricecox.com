import { Filters } from "@/types/app";

interface FilterbarProps {
  currentFilter: Filters;
  onSelectFilter: (filter: Filters) => void;
}

export const Filterbar: React.FC<FilterbarProps> = ({
  currentFilter,
  onSelectFilter,
}) => {
  return (
    <div className="sticky top-0 h-32  bg-[#E5E4E2]">
      <div className="h-32 px-60 flex font-light items-center justify-between text-bodoni tracking-wide uppercase">
        <div className="tracking-wide text-white text-xl bg-black px-6 py-2">
          All Projects
        </div>
        {Object.entries(Filters)
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
