import {
  Project,
  ProjectBlock,
  ProjectBlockType,
  CarouselBlock,
} from "@/types/global";
import { isValidDescription } from "@/utils/validators";
import { useFormContext, Controller } from "react-hook-form";

import { Input } from "../../../../Input";
import { Editor } from "../../../../Editor";
import { MultipleImagesInput } from "../../MultipleImagesInput";
import { ColorPicker } from "../ColorPicker";

export function blockIsCarouselBlock(
  block: ProjectBlock
): block is CarouselBlock {
  return block.type === ProjectBlockType.CAROUSEL;
}

interface FormCarouselBlockProps {
  index: number;
}

export const FormCarouselBlock: React.FC<FormCarouselBlockProps> = ({
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
        <span className="font-bold uppercase mr-1">Block Type:</span>Carousel
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

      <div className="my-4 w-full">
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

      <div className="mb-4 w-full">
        <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
          Images on carousel
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
      </div>
    </div>
  );
};
