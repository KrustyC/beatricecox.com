import {
  ProjectBlock,
  ProjectBlockType,
  ProjectInfoBlock,
  Project,
} from "@/types/global";
import { Controller, useFormContext } from "react-hook-form";
import { isValidDescription } from "@/utils/validators";

import { Input } from "../../../../Input";
import { Editor } from "../../../../Editor";
import { ColorPicker } from "../ColorPicker";

export function blockIsProjectInfoBlock(
  block: ProjectBlock
): block is ProjectInfoBlock {
  return block.type === ProjectBlockType.PROJECT_INFO;
}

interface FormProjectInfoBlockProps {
  index: number;
}

export const FormProjectInfoBlock: React.FC<FormProjectInfoBlockProps> = ({
  index,
}) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<Project>();

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <span className="w-full mb-4">
        <span className="font-bold uppercase mr-1">Block Type:</span>
        Griglia
        <div className="flex items-center my-2">
          <span className="font-bold mr-4">Background Color</span>
          <Controller
            control={control}
            name={`blocks.${index}.backgroundColor`}
            render={({ field: { value, onChange } }) => (
              <ColorPicker currentValue={value} onChange={onChange} />
            )}
          />
        </div>
      </span>

      <div className="flex-1 flex items-end w-full mb-4">
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

      <div className="flex-1 flex items-end w-full mb-4">
        <Input
          width="w-full"
          register={register}
          options={{ required: "Please add a subtitle" }}
          error={errors.slug}
          label="Subtitle"
          name={`blocks.${index}.subtitle`}
          type="text"
          placeholder="Subtitle"
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
            rules={{ validate: isValidDescription }} // @TODO CHECK THIS SHIT"S FAILING
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

      <div className="flex flex-col w-full mb-4">
        <div className="flex-1 flex gap-6 justify-between w-full mb-4">
          <Input
            width="w-full"
            register={register}
            options={{ required: false }}
            label="team"
            name={`blocks.${index}.info.team`}
            type="text"
            placeholder="Team name"
          />

          <Input
            width="w-full"
            register={register}
            options={{ required: false }}
            label="Client"
            name={`blocks.${index}.info.client`}
            type="text"
            placeholder="Client name"
          />
        </div>

        <div className="flex-1 flex gap-6 justify-between w-full mb-4">
          <Input
            width="w-full"
            register={register}
            options={{ required: false }}
            label="date"
            name={`blocks.${index}.info.date`}
            type="text"
            placeholder="Date"
          />

          <Input
            width="w-full"
            register={register}
            options={{ required: false }}
            label="role"
            name={`blocks.${index}.info.role`}
            type="text"
            placeholder="Role"
          />
        </div>

        <div className="flex-1 flex gap-6 justify-between w-full mb-4">
          <Input
            width="w-full"
            register={register}
            options={{ required: false }}
            label="skills"
            name={`blocks.${index}.info.skills`}
            type="text"
            placeholder="Skills"
          />
        </div>
      </div>
    </div>
  );
};
