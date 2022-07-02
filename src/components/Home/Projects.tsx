type Project = {
  id: string;
  title: string;
};

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = () => (
  <div className="bg-[#EDB8B8] flex flex-col">Projects</div>
);
