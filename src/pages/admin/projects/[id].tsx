import { useEffect } from "react";
import { GetStaticPaths } from "next";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import { AdminLayout } from "@/layouts/AdminLayout";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { ProjectForm } from "@/components/admin/Forms/ProjectForm";
import { useNetlifyGetFunction } from "@/hooks/useNetlifyGetFunction";
import { useNetlifyPutFunction } from "@/hooks/useNetlifyPutFunction";
import { Panel } from "@/components/admin/Panel";
import { Project } from "@/types/global";
import { NextPageWithLayout } from "@/types/app";

interface EditProps {
  id: string;
}

const Edit: React.FC<React.PropsWithChildren<EditProps>> = ({ id }) => {
  const { user } = useAuth();
  const router = useRouter();

  const { data, loading, error } = useNetlifyGetFunction<{ project: Project }>({
    fetchUrlPath: `/admin-projects?id=${id}`,
    user,
  });

  const {
    onUpdate,
    pending,
    error: updateError,
  } = useNetlifyPutFunction<{ project: Project }>({ user });

  const onEditProject = async (updatedProject: Project) => {
    const res = await onUpdate(`/admin-projects?id=${id}`, {
      project: updatedProject,
    });

    if (res !== undefined) {
      toast.success("Project successfully updated!");
      setTimeout(() => {
        router.push("/admin/projects");
      }, 800);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Error fetching project");
    }

    if (updateError) {
      toast.error("Error updating project");
    }
  }, [error, updateError]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-600 font-bold">Edit Project</h2>
      </div>

      <div className="flex justify-between mt-4">
        <Panel className="mr-4 w-full">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <ProjectForm
              pending={pending}
              project={data?.project}
              onSaveProject={onEditProject}
            />
          )}
        </Panel>
      </div>
    </div>
  );
};

const AdminProjectsEdit: NextPageWithLayout<undefined> = () => {
  const router = useRouter();

  const { id } = router.query as { id?: string };

  if (!id) {
    return null;
  }

  return <Edit id={id} />;
};

AdminProjectsEdit.Layout = AdminLayout;

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default AdminProjectsEdit;
