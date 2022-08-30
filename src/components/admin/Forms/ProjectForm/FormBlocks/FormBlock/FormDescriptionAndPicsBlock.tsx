import {
  Project,
  ProjectBlock,
  ProjectBlockType,
  DescriptionAndPicsBlock,
} from "@/types/global";
import { isValidDescription } from "@/utils/validators";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "../../../../Input";
import { Editor } from "../../../../Editor";

export function blockIsDescriptionAndPicsBlock(
  block: ProjectBlock
): block is DescriptionAndPicsBlock {
  return block.type === ProjectBlockType.DESCRIPTION_AND_PICS;
}

interface FormDescriptionAndPicsBlockProps {
  block: DescriptionAndPicsBlock;
  index: number;
}

export const FormDescriptionAndPicsBlock: React.FC<
  FormDescriptionAndPicsBlockProps
> = ({ index }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<Project>();

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <span className="w-full">
        <span className="font-bold uppercase">Block Type:</span>Description And
        Pics Block
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

      <div className="mb-4 w-full">
        <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
          Description
        </span>
        <div>
          <Controller
            control={control}
            name={`blocks.${index}.description`}
            rules={{ validate: isValidDescription }}
            render={({ field: { value, onChange, onBlur } }) => (
              <Editor
                value={value}
                error={errors?.intro}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};
