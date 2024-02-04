const ProjectLoading = () => (
  <div className="animate-pulse mb-20 lg:mb-24 last:mb-0 flex relative flex-col">
    <div className="aspect-w-1 aspect-h-1 bg-gray-100"></div>
    <div className="flex flex-col gap-8">
      <div className="h-[550px] bg-slate-300 w-full" />

      <div className="bg-slate-300 h-10" />
    </div>

    <div className="bg-slate-300 h-8 w-48 mt-4" />

    <div className="flex flex-col gap-2 mt-4">
      <div className="bg-slate-300 h-4 w-[80%]" />
      <div className="bg-slate-300 h-4 w-full" />
      <div className="bg-slate-300 h-4 w-[60%]" />
    </div>
  </div>
);

export const ProjectsListLoading = () => {
  return (
    <div id="projects-container" className="bg-white">
      <div className="min-h-[90vh] px-8 md:px-16 lg:px-32 xl:px-60 py-12 lg:py-24 gap-x-20 flex flex-col md:flex-row md:justify-between">
        <div className="flex-1 flex flex-col mt-0">
          {Array.from({ length: 2 }, () => null).map((_, i) => (
            <ProjectLoading key={i} />
          ))}
        </div>

        <div className="flex-1 flex flex-col mt-20 lg:mt-12">
          {Array.from({ length: 2 }, () => null).map((_, i) => (
            <ProjectLoading key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
