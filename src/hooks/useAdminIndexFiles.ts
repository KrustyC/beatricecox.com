import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNetlifyGetFunction } from "@/hooks/useNetlifyGetFunction";

interface UseFilesProps<FetchResult> {
  fetchUrlPath: string;
  parseResponse: (response: FetchResult) => string[];
}

export function useAdminIndexFiles<FetchResult>({
  fetchUrlPath,
  parseResponse,
}: UseFilesProps<FetchResult>) {
  const [files, setFiles] = useState<string[]>([]);
  const { user } = useAuth();

  const [fileSelectedForDetail, setFileSelectedForDetail] = useState<
    string | null
  >(null);
  const [fileSelectedForRemove, setFileSelectedForRemove] = useState<
    string | null
  >(null);

  const { data, loading, error } = useNetlifyGetFunction<FetchResult>({
    fetchUrlPath,
    user,
  });

  useEffect(() => {
    if (!data || files.length > 0) {
      return;
    }

    const response = parseResponse(data);
    // @TODO This is a temporary fix until we can get the response from the API

    setFiles(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onConfirmFileUpload = (newFile: string) => {
    setFiles([...files, newFile]);
  };

  const onSelectFile = (index: number) => {
    setFileSelectedForDetail(files[index]);
  };

  const onCancelView = () => {
    setFileSelectedForDetail(null);
  };

  const onWantToDeleteFile = (selectedFile: string | undefined = undefined) => {
    const fileToRemove = selectedFile || fileSelectedForDetail;
    setFileSelectedForDetail(null);
    setFileSelectedForRemove(fileToRemove);
  };

  const onDeleteSuccess = () => {
    if (!fileSelectedForRemove) {
      return;
    }

    const imageToDeleteIndex = files.indexOf(fileSelectedForRemove);
    setFiles([
      ...files.slice(0, imageToDeleteIndex),
      ...files.slice(imageToDeleteIndex + 1),
    ]);

    setFileSelectedForRemove(null);
  };

  const onCancelDelete = () => {
    setFileSelectedForRemove(null);
  };

  return {
    files,
    loading,
    error,
    fileSelectedForDetail,
    fileSelectedForRemove,
    onConfirmFileUpload,
    onSelectFile,
    onCancelView,
    onWantToDeleteFile,
    onDeleteSuccess,
    onCancelDelete,
  };
}
