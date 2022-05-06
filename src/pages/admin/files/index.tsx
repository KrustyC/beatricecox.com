import { useEffect } from "react";
import { toast } from "react-toastify";
import { AdminLayout } from "@/layouts/AdminLayout";
import { useAdminIndexFiles } from "@/hooks/useAdminIndexFiles";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { Panel } from "@/components/admin/Panel";
import { UploadFileButton } from "@/components/admin/UploadFileButton";
import { getFileName } from "@/utils/files";
import { DeleteFileModal } from "@/components/admin/Modals/DeleteFileModal";
import { NextPageWithLayout } from "@/types/app";

const AdminFiles: NextPageWithLayout<undefined> = () => {
  const {
    files,
    loading,
    onConfirmFileUpload,
    fileSelectedForRemove,
    onWantToDeleteFile,
    onCancelDelete,
    onDeleteSuccess,
    error,
  } = useAdminIndexFiles<{
    files: string[];
  }>({
    fetchUrlPath: "/admin-files",
    parseResponse: (response) => response.files,
  });

  useEffect(() => {
    if (error) {
      toast.error("Error fetching files");
    }
  }, [error]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-600 font-bold">Files</h2>
        <UploadFileButton
          accept=".pdf, .doc, .docx"
          actionCopy="Upload New Partner Logo"
          folder="files"
          onConfirm={onConfirmFileUpload}
        />
      </div>

      <p className="text-gray-600">
        In this section you can manage your Files. Click on any file to view it
        in its full size or delete it.
      </p>

      <Panel className="w-10/12">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <table className="w-full table-fixed">
            <thead>
              <tr className="w-1/2 text-left text-sm border-b-2 border-black">
                <th className="w-1/2 pb-1 px-2 uppercase">Name</th>
                <th className="w-1/4 pb-1 px-2 uppercase">Actions</th>
              </tr>
            </thead>

            <tbody>
              {files.map((file) => (
                <tr key={file} className="py-20 border-b-2 border-gray-500">
                  <td className="w-1/2  py-4 truncate text-ellipsis font-semibold px-2">
                    {getFileName(file)}
                  </td>

                  <td className="w-1/2  py-4 truncate text-ellipsis font-semibold px-2">
                    <a
                      className="text-cyan-500 hover:text-cyan-700 underline"
                      href={file}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                    <button
                      className="text-red-500 hover:text-cyan-700 underline font-bold ml-4"
                      onClick={() => onWantToDeleteFile(file)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Panel>

      {fileSelectedForRemove ? (
        <DeleteFileModal
          fileToDelete={fileSelectedForRemove}
          onSuccess={onDeleteSuccess}
          onCancel={onCancelDelete}
        />
      ) : null}
    </div>
  );
};

AdminFiles.Layout = AdminLayout;

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default AdminFiles;
