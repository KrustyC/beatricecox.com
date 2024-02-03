const Line: React.FC = () => (
  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center border-t-2 border-black py-4">
    <div className="w-20 h-8 bg-slate-300" />
    <div className="w-20 h-8 bg-slate-300" />
    <div className="mt-3 lg:mt-0 w-32 h-8 bg-slate-300" />
  </div>
);

export const ProjectLoading: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="px-6 md:px-16 lg:px-24">
        <div className="relative w-full aspect-square md:aspect-video rounded-xl bg-slate-300" />
      </div>

      <div className="project-section bg-white">
        <div className="project-container flex flex-col">
          <div className="mb-1 h-10 bg-slate-300" />

          <div className="mb-6 bg-slate-300 h-6" />

          <div className="flex flex-col gap-2 mb-8">
            <div className="bg-slate-300 h-2" />
            <div className="bg-slate-300 h-2" />
            <div className="bg-slate-300 h-2" />
          </div>

          <div className="flex flex-col">
            <Line />
            <Line />
            <Line />
            <Line />
          </div>
        </div>
      </div>
    </div>
  );
};
