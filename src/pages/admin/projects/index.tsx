import { useEffect } from "react";
import { toast } from "react-toastify";
import { AdminLayout } from "@/layouts/AdminLayout";
import { DeleteItemModal } from "@/components/admin/DeleteItemModal";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { IndexLayout } from "@/layouts/AdminIndexLayout";
import { ProjectCard } from "@/components/admin/Cards/ProjectCard";
import { Project } from "@/types/global";
import { useAdminIndexList } from "@/hooks/useAdminIndexList";
import { NextPageWithLayout } from "@/types/app";

const AdminProjects: NextPageWithLayout<undefined> = () => {
  const {
    items: projects,
    loading,
    error,
    itemToRemoveIndex: projectToRemoveIndex,
    onWantToRemoveItem: onWantToRemoveProject,
    onRemoveConfirmed,
    onRemoveCancelled,
  } = useAdminIndexList<{ projects: Project[] }, Project>({
    fetchPath: "/admin-projects",
    parseResponse: (response) => response.projects,
  });

  useEffect(() => {
    if (error) {
      toast.error("Error fetching projects");
    }
  }, [error]);

  return (
    <div className="h-screen bg-admin-grey">
      <div className="flex flex-wrap">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project._id}
                project={project}
                onWantToRemoveProject={() => onWantToRemoveProject(index)}
              />
            ))}
          </div>
        )}
      </div>

      {projectToRemoveIndex > -1 ? (
        <DeleteItemModal
          itemGenericName="project"
          itemToDelete={projects[projectToRemoveIndex]}
          questionItem={projects[projectToRemoveIndex].title}
          deletePath={`/admin-projects?id=${projects[projectToRemoveIndex]._id}`}
          onSuccess={onRemoveConfirmed}
          onCancel={onRemoveCancelled}
        />
      ) : null}
    </div>
  );
};

const AdminProjectsLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => (
  <AdminLayout>
    <IndexLayout
      title="Projects"
      subtitle="Here you can manage your projects."
      itemName="Projects"
      createItemPath="/admin/projects/new"
      includeProjectsReIndexingButton
    >
      {children}
    </IndexLayout>
  </AdminLayout>
);

AdminProjects.Layout = AdminProjectsLayout;

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default AdminProjects;
