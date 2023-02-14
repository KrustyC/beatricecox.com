import {
  Project,
  ProjectBlock,
  ProjectBlockType,
  DescriptionAndPicsBlock,
} from "@/types/global";
import { useFormContext, Controller } from "react-hook-form";

import { Input } from "../../../../Input";
import { Editor } from "../../../../Editor";
import { MultipleImagesInput } from "../../MultipleImagesInput";
import { ColorPicker } from "../ColorPicker";

export function blockIsDescriptionAndPicsBlock(
  block: ProjectBlock
): block is DescriptionAndPicsBlock {
  return block.type === ProjectBlockType.DESCRIPTION_AND_PICS;
}

interface FormDescriptionAndPicsBlockProps {
  index: number;
  showAllBlock: boolean;
  onColorChange: (color: string) => void;
}

export const FormDescriptionAndPicsBlock: React.FC<
  FormDescriptionAndPicsBlockProps
> = ({ index, showAllBlock, onColorChange }) => {
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
        <span className="font-bold uppercase mr-1">Block Type:</span>Description
        And Pics Block
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
          <div className="flex-1 flex items-end w-full">
            <Input
              width="w-full"
              register={register}
              error={errors.title}
              label="Title"
              name={`blocks.${index}.title`}
              type="text"
              placeholder="Title"
            />
          </div>

          <div className="my-4 w-full">
            <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Description
            </span>
            <div>
              <Controller
                control={control}
                name={`blocks.${index}.description`}
                render={({ field: { value, onChange, onBlur } }) => (
                  <Editor
                    value={value}
                    error={errors?.description}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </div>
          </div>

          <div className="mb-4 w-full">
            <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Images
            </span>
            <div>
              <Controller
                control={control}
                name={`blocks.${index}.pictures`}
                render={({ field: { value, onChange } }) => (
                  <MultipleImagesInput
                    images={value || []}
                    onChangeImages={onChange}
                  />
                )}
              />
            </div>

            <div className="my-4 w-full flex items-center">
              <input
                type="checkbox"
                {...register(`blocks.${index}.showVertical`)}
              />
              <span className="uppercase block text-gray-700 text-sm font-bold ml-2">
                Show images in a vertical fashion
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
