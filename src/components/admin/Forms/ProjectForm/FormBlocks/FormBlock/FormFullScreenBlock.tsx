import {
  ProjectBlock,
  ProjectBlockType,
  FullScreenBlock,
  Project,
} from "@/types/global";
import { Controller, useFormContext } from "react-hook-form";
import { ImageSelector } from "@/components/admin/ImageSelector";

import { Input } from "../../../../Input";
import { ColorPicker } from "../ColorPicker";

export function blockIsFullScreenBlock(
  block: ProjectBlock
): block is FullScreenBlock {
  return block.type === ProjectBlockType.FULL_SCREEN;
}

interface FormFullScreenBlockProps {
  index: number;
  showAllBlock: boolean;
  onColorChange: (color: string) => void;
}

export const FormFullScreenBlock: React.FC<FormFullScreenBlockProps> = ({
  index,
  showAllBlock,
  onColorChange,
}) => {
  const {
    register,
    control,
    // formState: { errors },
  } = useFormContext<Project>();

  const handleBackgroundChange =
    (onChange: (color: string) => void) => (color: string) => {
      onChange(color);
      onColorChange(color);
    };

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <div className="w-full mb-4 z-10">
        <span className="font-bold uppercase mr-4">Block Type:</span> Full
        Screen
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
      </div>

      {showAllBlock && (
        <>
          <div className="flex-1 flex items-end w-full mb-4">
            <Input
              width="w-full"
              register={register}
              // error={errors?.blocks?.[index]?.title}
              label="Title"
              name={`blocks.${index}.title`}
              type="text"
              placeholder="Title"
            />
          </div>

          <div>
            <Controller
              name={`blocks.${index}.image`}
              rules={{ required: "Please make sure to add an image" }}
              render={(props) => (
                <ImageSelector
                  size="h-[250px] w-[300px]"
                  currentImage={props.field.value}
                  // error={errors?.mainImage}
                  onBlur={() => props.field.onBlur()}
                  onSelectImage={(image) => {
                    props.field.onChange(image);
                  }}
                />
              )}
              control={control}
            />
          </div>
        </>
      )}
    </div>
  );
};
