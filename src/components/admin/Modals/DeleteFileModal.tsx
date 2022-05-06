/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react";
import { toast } from "react-toastify";
import { getFileName } from "@/utils/files";
import { Modal } from "../Modal";
import { LoadingSpinner } from "../LoadingSpinner";
import { useNetlifyDeleteFunction } from "@/hooks/useNetlifyDeleteFunction";
import { useAuth } from "@/contexts/AuthContext";

interface DeleteFileModalProps {
  fileToDelete: string;
  onSuccess: VoidFunction;
  onCancel: VoidFunction;
}

export const DeleteFileModal: React.FC<DeleteFileModalProps> = ({
  fileToDelete,
  onSuccess,
  onCancel,
}) => {
  const { user } = useAuth();
  const { pending, error, onDelete } = useNetlifyDeleteFunction({ user });
  const fileName = getFileName(fileToDelete);

  useEffect(() => {
    if (error) {
      toast.error(
        "The file could not be deleted, please try again later or contact the web admin."
      );
    }
  }, [error]);

  const onDeleteFile = async () => {
    const res = await onDelete(`/admin-files?name=${fileName}`);

    if (res !== undefined) {
      onSuccess();
      toast.success(`The file "${fileName}" has been successfully deleted!`);
    }
  };

  return (
    <Modal>
      <div>
        <div className="text-start px-5 flex-auto justify-center">
          <h2 className="text-4xl text-admin-primary font-bold py-4 ">
            Are you sure?
          </h2>
          <p className="text-sm text-gray-500">
            Do you really want to delete this file?{" "}
            <b>This process can not be undone.</b>
          </p>

          <div className="mt-4 w-full flex justify-center">{fileName}</div>
        </div>

        <div className="p-3 mx-2 text-right space-x-4">
          <button disabled={pending} className="btn-admin" onClick={onCancel}>
            Cancel
          </button>
          <button
            disabled={pending}
            className="btn-admin btn-danger"
            onClick={onDeleteFile}
          >
            {pending ? (
              <LoadingSpinner color="bg-admin-danger-dark" />
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};
