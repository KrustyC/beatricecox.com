import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "@/contexts/AuthContext";
import { AdminLayout } from "@/layouts/AdminLayout";
import { ProjectForm } from "@/components/admin/Forms/ProjectForm";
import { Panel } from "@/components/admin/Panel";
import { useNetlifyPostFunction } from "@/hooks/useNetlifyPostFunction";
import { Project } from "@/types/global";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "@/types/app";

const AdminProjectsCreate: NextPageWithLayout<undefined> = () => {
  const { user } = useAuth();
  const router = useRouter();

  const {
    onCreate,
    pending,
    error: updateError,
  } = useNetlifyPostFunction<{ project: Project }>({ user });

  const onCreateProject = async (project: Project) => {
    const res = await onCreate(`/admin-projects`, { project });

    if (res !== undefined) {
      toast.success("Project successfully added!");
      setTimeout(() => {
        router.push("/admin/projects");
      }, 800);
    }
  };

  useEffect(() => {
    if (updateError) {
      toast.error(updateError);
    }
  }, [updateError]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-600 font-bold">Create Project</h2>
      </div>

      <div className="flex justify-between w-100 mt-4">
        <Panel className="mr-4 w-full">
          <ProjectForm pending={pending} onSaveProject={onCreateProject} />
        </Panel>
      </div>
    </div>
  );
};

AdminProjectsCreate.Layout = AdminLayout;

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default AdminProjectsCreate;
