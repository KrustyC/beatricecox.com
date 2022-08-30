import {
  ProjectBlock,
  ProjectBlockType,
  ProjectInfoBlock,
  Project,
} from "@/types/global";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../Input";

export function blockIsProjectInfoBlock(
  block: ProjectBlock
): block is ProjectInfoBlock {
  return block.type === ProjectBlockType.PROJECT_INFO;
}

interface FormProjectInfoBlockProps {
  block: ProjectInfoBlock;
  index: number;
}

export const FormProjectInfoBlock: React.FC<FormProjectInfoBlockProps> = ({
  index,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Project>();

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <span className="w-full">
        <span className="font-bold uppercase">Block Type:</span>Project Info
      </span>
      <div className="flex-1 flex items-end w-full">
        <Input
          width="w-full"
          register={register}
          options={{ required: "Please add a title" }}
          error={errors.slug}
          label="Title"
          name={`blocks.${index}.title`}
          type="text"
          placeholder="Title"
        />
      </div>
    </div>
  );
};
