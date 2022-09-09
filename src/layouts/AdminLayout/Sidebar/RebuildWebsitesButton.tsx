import { useEffect } from "react";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import { useNetlifyPostFunction } from "@/hooks/useNetlifyPostFunction";

export const RebuildWebsitesButton: React.FC = () => {
  const { user } = useAuth();

  const {
    onCreate,
    pending,
    error: updateError,
  } = useNetlifyPostFunction({ user });

  useEffect(() => {
    if (updateError) {
      toast.error(updateError);
    }
  }, [updateError]);

  const onRebuildWebsites = async () => {
    const res = await onCreate(`/admin-trigger-build`);

    if (res !== undefined) {
      toast.success(
        "Build has started, please check the website back in a couple of minutes"
      );
    }
  };

  return (
    <button
      type="button"
      className="btn-admin btn-dark"
      onClick={onRebuildWebsites}
    >
      {pending ? <LoadingSpinner /> : "Rebuild Website"}
    </button>
  );
};
