import { TeachingResource } from "@/types/global";

interface TeachingResourceCardProps {
  teachingResource: TeachingResource;
  onWantToRemoveTeachingResource: VoidFunction;
}

export const TeachingResourceCard: React.FC<
  React.PropsWithChildren<TeachingResourceCardProps>
> = ({ teachingResource, onWantToRemoveTeachingResource }) => (
  <div className="bg-white shadow rounded-lg p-4 flex flex-col">
    <div className="flex flex-col">
      <span className="text-xl font-bold text-gray-900">
        {teachingResource.title}
      </span>

      <div className="flex items-end mr-4 mb-2 text-sm text-gray-600">
        {teachingResource.materials.length} material
        {teachingResource.materials.length > 1 ? "s" : ""}
      </div>
    </div>

    <div className="flex justify-end items-end grow mt-2">
      <a
        href={`/admin/teaching-resources/${teachingResource._id}`}
        className="btn-admin btn-primary btn-sm text-base uppercase mr-2"
      >
        Edit
      </a>

      <button
        className="btn-admin btn-danger btn-sm text-base uppercase"
        onClick={onWantToRemoveTeachingResource}
      >
        Remove
      </button>
    </div>
  </div>
);
