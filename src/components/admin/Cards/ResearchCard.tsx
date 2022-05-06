import { Research } from "@/types/global";

interface ResearchCardProps {
  research: Research;
  onWantToRemoveResearch: VoidFunction;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({
  research,
  onWantToRemoveResearch,
}) => (
  <div className="bg-white shadow rounded-lg p-4 flex flex-col">
    <div className="flex flex-col">
      <span className="text-xl font-bold text-gray-900">{research.title}</span>

      <div className="flex items-end mr-4 mb-2 text-sm text-gray-600">
        {research.materials.length} material
        {research.materials.length > 1 ? "s" : ""}
      </div>
    </div>

    <div className="flex justify-end items-end grow mt-2">
      <a
        href={`/admin/researches/${research._id}`}
        className="btn-admin btn-primary btn-sm text-base uppercase mr-2"
      >
        Edit
      </a>

      <button
        className="btn-admin btn-danger btn-sm text-base uppercase"
        onClick={onWantToRemoveResearch}
      >
        Remove
      </button>
    </div>
  </div>
);
