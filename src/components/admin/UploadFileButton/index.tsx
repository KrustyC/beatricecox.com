import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "@/contexts/AuthContext";
import { uploadFileToS3 } from "@/utils/upload-file";
import { FilesUploadPreviewModal } from "./FilesUploadPreviewModal";

interface UploadFileButtonProps {
  actionCopy: string;
  className?: string;
  accept: string;
  folder: "images" | "files" | "partners";
  onConfirm: (newImage: string) => void;
}

export type FileEventTarget = React.ChangeEventHandler<HTMLInputElement> & {
  target: { files: FileList };
};

export const UploadFileButton: React.FC<
  React.PropsWithChildren<UploadFileButtonProps>
> = ({
  actionCopy,
  accept,
  className = "btn-admin btn-primary btn-sm",
  folder,
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
        folder,
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
    <div>
      <button type="button" className={className} onClick={onWantToUpload}>
        {actionCopy}
      </button>
      <input
        ref={fileInput}
        style={{ display: "none" }}
        type="file"
        accept={accept}
        onChange={(e) => handleFileInput(e as unknown as FileEventTarget)}
      />

      {file !== null ? (
        <FilesUploadPreviewModal
          file={file}
          pending={pending}
          onConfirm={onUploadToS3}
          onCancel={onCancel}
        />
      ) : null}
    </div>
  );
};
