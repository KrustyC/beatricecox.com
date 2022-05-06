import { Project } from "@/types/global";

interface ProjectCardProps {
  project: Project;
  onWantToRemoveProject: VoidFunction;
}

export const ProjectCard: React.FC<
  React.PropsWithChildren<ProjectCardProps>
> = ({ project, onWantToRemoveProject }) => (
  <div className="bg-white shadow rounded-lg p-4 ">
    <div className="flex flex-col h-full">
      <span className="text-xl font-bold text-gray-900 mb-2">
        {project.title}
      </span>

      <div className="flex items-end justify-end mt-2 w-100 grow">
        <div>
          <a
            href={`/admin/projects/${project._id}`}
            className="btn-admin btn-primary btn-sm text-base uppercase mr-2"
          >
            Edit
          </a>

          <button
            className="btn-admin btn-danger btn-sm text-base uppercase"
            onClick={onWantToRemoveProject}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
);
