import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "@/contexts/AuthContext";
import { MaterialLink } from "@/types/global";
import { uploadFileToS3 } from "@/utils/upload-file";
import { getFileName } from "@/utils/files";

interface PdfUploaderProps {
  value: MaterialLink;
  onConfirm: (newLink: string) => void;
}

export type FileEventTarget = React.ChangeEventHandler<HTMLInputElement> & {
  target: { files: FileList };
};

export const PdfUploader: React.FC<PdfUploaderProps> = ({
  value,
  onConfirm,
}) => {
  const { user } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [pending, setPending] = useState(false);

  const fileInput = useRef<HTMLInputElement>(null);

  const handleFileInput = (e: FileEventTarget) => {
    setFile(e.target.files[0]);
  };

  function onWantToUpload() {
    fileInput.current?.click();
  }

  async function onUploadToS3() {
    if (!file) {
      return;
    }

    setPending(true);

    try {
      const newImage = await uploadFileToS3({
        file,
        folder: "files",
        token: user?.token?.access_token || "",
      });

      onConfirm(newImage);
      toast.success("Image successfully uploaded");
    } catch (e) {
      toast.error((e as Error).message);
    }

    setFile(null);
    setPending(false);
  }

  function onCancel() {
    setFile(null);
  }

  return (
    <div className="flex h-[350px] flex-start px-2 py-4 justify-start flex-col">
      {value && value.type === "pdf" && (
        <div className="flex flex-col mt-2">
          <span className="font-bold text-sm">Preview:</span>
          <a
            className="text-primary"
            href={value.value}
            target="_blank"
            rel="noopener noreferrer"
          >
            {getFileName(value.value)}
          </a>
        </div>
      )}

      <button
        className="btn-admin btn-primary w-40 my-4"
        type="button"
        onClick={onWantToUpload}
      >
        Select PDF
      </button>
      <input
        ref={fileInput}
        style={{ display: "none" }}
        type="file"
        accept=".pdf"
        onChange={(e) => handleFileInput(e as unknown as FileEventTarget)}
      />

      {file ? (
        <div>
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
          <div>
            <button
              className="btn-admin btn-primary w-24 my-4 btn-sm mr-4"
              disabled={pending}
              onClick={onUploadToS3}
            >
              Confirm
            </button>
            <button
              className="btn-admin btn-danger w-24 my-4 btn-sm mr-4"
              disabled={pending}
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
