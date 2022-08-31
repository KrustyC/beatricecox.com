import {
  BaseBlock,
  ProjectBlock,
  ProjectBlockType,
  ProjectInfoBlock as IProjectInfoBlock,
} from "@/types/global";
import parse from "html-react-parser";

export function blockIsProjectInfoBlock(
  block: Partial<BaseBlock> | ProjectBlock
): block is IProjectInfoBlock {
  return block.type === ProjectBlockType.PROJECT_INFO;
}

interface LineProps {
  title: string;
  value: string;
}

const Line: React.FC<LineProps> = ({ title, value }) => (
  <div className="flex justify-between items-center border-t-2 border-black py-4">
    <span className="uppercase tracking-[.30rem]">{title}</span>
    <span>{value}</span>
  </div>
);

interface ProjectInfoBlockProps {
  block: IProjectInfoBlock;
}

export const ProjectInfoBlock: React.FC<ProjectInfoBlockProps> = ({
  block,
}) => {
  return (
    <div
      className="project-section"
      style={{ background: block.backgroundColor || "white" }}
    >
      <div className="project-container flex flex-col">
        <h1 className="text-4xl font-medium mb-1">{block.title}</h1>
        <span className="text-xl font-light text-[#8C8C8C] mb-6">
          {block.subtitle}
        </span>

        <div className="text-xl font-light mb-4 mb-10">
          {parse(block.description)}
        </div>

        <div className="flex flex-col">
          {block.info.team && <Line title="Team" value={block.info.team} />}

          {block.info.client && (
            <Line title="Client" value={block.info.client} />
          )}

          {block.info.date && <Line title="Date" value={block.info.date} />}

          {block.info.role && <Line title="role" value={block.info.role} />}

          {block.info.skills && (
            <Line title="skills" value={block.info.skills} />
          )}
        </div>
      </div>
    </div>
  );
};
