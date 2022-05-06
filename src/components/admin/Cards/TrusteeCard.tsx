import { Trustee } from "@/types/global";

interface TrusteeCardProps {
  trustee: Trustee;
  onWantToRemoveTrustee: VoidFunction;
}

export const TrusteeCard: React.FC<
  React.PropsWithChildren<TrusteeCardProps>
> = ({ trustee, onWantToRemoveTrustee }) => (
  <div className="bg-white shadow rounded-lg p-4 ">
    <div className="flex flex-col">
      <span className="text-xl font-bold text-gray-900">{trustee.name}</span>

      <div className="flex items-end justify-end mt-2 w-100">
        <div>
          <a
            href={`/admin/trustees/${trustee._id}`}
            className="btn-admin btn-primary btn-sm text-base uppercase mr-2"
          >
            Edit
          </a>

          <button
            className="btn-admin btn-danger btn-sm text-base uppercase"
            onClick={onWantToRemoveTrustee}
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
