import { Publication } from "@/types/global";

interface PublicationCardProps {
  publication: Publication;
  onWantToRemovePublication: VoidFunction;
}

export const PublicationCard: React.FC<
  React.PropsWithChildren<PublicationCardProps>
> = ({ publication, onWantToRemovePublication }) => (
  <div className="bg-white shadow rounded-lg p-4 flex flex-col">
    <div className="flex flex-col">
      <span className="text-xl font-bold text-gray-900">
        {publication.title}
      </span>

      <div className="flex items-end mr-4 mb-2 text-sm text-gray-600">
        {publication.materials.length} material
        {publication.materials.length > 1 ? "s" : ""}
      </div>
    </div>

    <div className="flex justify-end items-end grow mt-2">
      <a
        href={`/admin/publications/${publication._id}`}
        className="btn-admin btn-primary btn-sm text-base uppercase mr-2"
      >
        Edit
      </a>

      <button
        className="btn-admin btn-danger btn-sm text-base uppercase"
        onClick={onWantToRemovePublication}
      >
        Remove
      </button>
    </div>
  </div>
);
