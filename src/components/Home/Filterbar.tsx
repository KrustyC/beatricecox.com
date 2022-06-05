enum Filters {
  ALL = "ALL",
  PACKAGING = "PACKAGING",
  UX_UI = "UX/UI",
  INDUSTRIAL = "INDUSTRIAL",
  THREED = "3D",
  OTHER = "OTHER",
}

interface FilterbarProps {
  currentFilter: Filters;
  onSelectFilter: (filter: Filters) => void;
}

export const Filterbar: React.FC<FilterbarProps> = () => {
  return (
    <div className="sticky top-0 h-32  bg-[#E5E4E2]">
      <div className="h-32 px-60 flex font-light items-center justify-between text-bodoni tracking-wide uppercase">
        <div className="tracking-wide text-white text-xl bg-black px-6 py-2">
          All Projects
        </div>
        {Object.keys(Filters)
          .filter((key) => key !== "ALL")
          .map((key) => {
            const filter = Filters[key as any as keyof Filters];

            return (
              <div key={key} className={`text-black tracking-wide text-xl`}>
                <p className="animated-filter">{filter}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
