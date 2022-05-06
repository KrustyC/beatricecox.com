import { School } from "@/types/global";
import { MarkerIcon } from "../../icons/Marker";

interface SchoolCardProps {
  school: School;
  onWantToRemoveSchool: VoidFunction;
}

export const SchoolCard: React.FC<SchoolCardProps> = ({
  school,
  onWantToRemoveSchool,
}) => (
  <div className="bg-white shadow rounded-lg p-4 ">
    <div className="flex flex-col">
      <span className="text-xl font-bold text-gray-900">{school.name}</span>

      <div className="flex mb-2">
        <div className="flex items-end mr-4">
          <div className="icon-wrapper">
            <MarkerIcon height="h-4" width="w-4" />
          </div>
          <span className="ml-1 text-sm text-gray-600">{school.postcode}</span>
        </div>
      </div>

      <div className="flex items-end justify-end mt-2 w-100">
        <div>
          <a
            href={`/admin/schools/${school._id}`}
            className="btn-admin btn-primary btn-sm text-base uppercase mr-2"
          >
            Edit
          </a>

          <button
            className="btn-admin btn-danger btn-sm text-base uppercase"
            onClick={onWantToRemoveSchool}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
);

{
  /* <style>
  .icon-wrapper {
    margin-bottom: 3px;
  }
</style> */
}
