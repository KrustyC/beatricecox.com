import { Modal } from "../Modal";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";

interface FilesUploadPreviewModalProps {
  file: File;
  pending: boolean;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
}

export const FilesUploadPreviewModal: React.FC<
  FilesUploadPreviewModalProps
> = ({ file, pending, onConfirm, onCancel }) => {
  return (
    <Modal width="w-5/12">
      <div>
        <div className="text-left px-5 flex-auto justify-center">
          <h2 className="text-4xl text-admin-primary font-bold py-2 ">
            Confirm Your Choices
          </h2>
          <p className="text-sm text-gray-500">
            Please check the file name correspond to the image you want to
            upload.
          </p>
          <div className="mt-8">
            <table className="table-auto divide-y divide-gray-200 w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Size (in MB)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-left">
                    {file.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left">
                    {(file.size / 1024 / 1000).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left">
                    {file.type}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              className="btn-admin mr-2"
              disabled={pending}
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="btn-admin btn-primary"
              disabled={pending}
              onClick={onConfirm}
            >
              {pending ? <LoadingSpinner /> : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
