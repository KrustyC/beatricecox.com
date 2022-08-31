import {
  ProjectBlock,
  ProjectBlockType,
  TitleAndTextBlock,
  Project,
} from "@/types/global";
import { Controller, useFormContext } from "react-hook-form";
import { isValidDescription } from "@/utils/validators";

import { Input } from "../../../../Input";
import { Editor } from "../../../../Editor";
import { ColorPicker } from "../ColorPicker";

export function blockIsTitleAndTextBlock(
  block: ProjectBlock
): block is TitleAndTextBlock {
  return block.type === ProjectBlockType.TITLE_AND_TEXT;
}

interface FormTitleAndTextBlockProps {
  index: number;
  showAllBlock: boolean;
  onColorChange: (color: string) => void;
}

export const FormTitleAndTextBlock: React.FC<FormTitleAndTextBlockProps> = ({
  index,
  showAllBlock,
  onColorChange,
}) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<Project>();

  const handleBackgroundChange =
    (onChange: (color: string) => void) => (color: string) => {
      onChange(color);
      onColorChange(color);
    };

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <span className="w-full mb-4 z-10">
        <span className="font-bold uppercase mr-1">Block Type:</span>
        Title and Text
        <div className="flex items-center my-2">
          <span className="font-bold mr-4">Background Color</span>
          <Controller
            control={control}
            name={`blocks.${index}.backgroundColor`}
            render={({ field: { value, onChange } }) => (
              <ColorPicker
                currentValue={value}
                onChange={handleBackgroundChange(onChange)}
              />
            )}
          />
        </div>
      </span>

      {showAllBlock && (
        <>
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

          <div className="mb-4 w-full">
            <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Text
            </span>
            <div>
              <Controller
                control={control}
                name={`blocks.${index}.text`}
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
        </>
      )}
    </div>
  );
};
