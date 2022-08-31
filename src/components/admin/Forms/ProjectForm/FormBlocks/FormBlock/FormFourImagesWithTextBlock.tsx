import {
  BaseBlock,
  FourImagesWithTextBlock,
  Project,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";
import { Controller, useFormContext } from "react-hook-form";
import { ImageSelector } from "@/components/admin/ImageSelector";
import { Editor } from "@/components/admin/Editor";
import { isValidDescription } from "@/utils/validators";

import { ColorPicker } from "../ColorPicker";

export function blockIsFourImagesWithTextBlock(
  block: Partial<BaseBlock> | ProjectBlock
): block is FourImagesWithTextBlock {
  return block.type === ProjectBlockType.FOUR_IMAGES_WITH_TEXT;
}

interface ImageWithTextInputProps {
  index: number;
  imageKey: "image1" | "image2" | "image3" | "image4";
}

const ImageWithTextInput: React.FC<ImageWithTextInputProps> = ({
  index,
  imageKey,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Project>();

  return (
    <div className="flex w-full border-1 gap-x-4 p-2">
      <div>
        <Controller
          name={`blocks.${index}.${imageKey}.img`}
          rules={{ required: "Please make sure to add an image" }}
          render={(props) => (
            <ImageSelector
              size="h-[250px] w-[300px]"
              currentImage={props.field.value}
              error={errors?.mainImage}
              onBlur={() => props.field.onBlur()}
              onSelectImage={(image) => {
                props.field.onChange(image);
              }}
            />
          )}
          control={control}
        />
      </div>
      <div className="w-full bg-red">
        <Controller
          control={control}
          name={`blocks.${index}.${imageKey}.text`}
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
  );
};

interface FourImagesWithTextBlockProps {
  index: number;
  showAllBlock: boolean;
  onColorChange: (color: string) => void;
}

export const FormFourImagesWithTextBlock: React.FC<
  FourImagesWithTextBlockProps
> = ({ index, showAllBlock, onColorChange }) => {
  const { control } = useFormContext<Project>();

  const handleBackgroundChange =
    (onChange: (color: string) => void) => (color: string) => {
      onChange(color);
      onColorChange(color);
    };

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <span className="w-full mb-4 z-10">
        <span className="font-bold uppercase mr-1">Block Type:</span>4 Images
        with Text
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
        <div className="flex flex-col gap-8 w-full">
          <ImageWithTextInput index={index} imageKey="image1" />
          <ImageWithTextInput index={index} imageKey="image2" />
          <ImageWithTextInput index={index} imageKey="image3" />
          <ImageWithTextInput index={index} imageKey="image4" />
        </div>
      )}
    </div>
  );
};
