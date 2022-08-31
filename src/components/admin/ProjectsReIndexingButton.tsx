import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "@/contexts/AuthContext";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { REST_METHOD } from "@/types/global";
import { fetchJson } from "@/utils/fetch-json";

export const ProjectsReIndexingButton = () => {
  const { user } = useAuth();

  const [pending, setPending] = useState(false);

  const onRebuildProjectIndexes = async (): Promise<void> => {
    setPending(true);

    try {
      const url = `${process.env.baseUrl}/.netlify/functions/admin-build-projects-index`;
      const options = {
        method: REST_METHOD.POST,
        token: user?.token?.access_token,
      };

      await fetchJson(url, options);
      toast.success("Projects sort index successfully built!");
    } catch (error) {
      toast.error(error as string);
    }
    setPending(false);
  };

  return (
    <button
      type="button"
      disabled={pending}
      className="btn-admin btn-dark btn-sm text-base min-w-[210px]"
      onClick={onRebuildProjectIndexes}
    >
      {pending ? <LoadingSpinner /> : "Rebuild Projects Indexes"}
    </button>
  );
};
