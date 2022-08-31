import {
  TwoTitlesAndParagraphBlock,
  Project,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";
import { Controller, useFormContext } from "react-hook-form";
import { isValidDescription } from "@/utils/validators";

import { Input } from "../../../../Input";
import { Editor } from "../../../../Editor";
import { ColorPicker } from "../ColorPicker";

export function blockIsTwoTitlesAndParagraphBlock(
  block: ProjectBlock
): block is TwoTitlesAndParagraphBlock {
  return block.type === ProjectBlockType.TWO_TITLES_AND_PARAGRAPH;
}

interface FormTwoTitlesAndParagraphBlockProps {
  index: number;
}

export const FormTwoTitlesAndParagraphBlock: React.FC<
  FormTwoTitlesAndParagraphBlockProps
> = ({ index }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<Project>();

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <span className="w-full mb-4">
        <span className="font-bold uppercase mr-4">Block Type:</span> Titles
        with Side Paragrpahs
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

      <div className="mb-6 pb-6 w-full border-b-2 border-[black]">
        <span className="mb-6 font-bold">First parapgraph</span>
        <div className="flex w-full mt-4">
          <Input
            width="w-full"
            register={register}
            options={{ required: "Please add a title" }}
            error={errors.slug}
            label="Title"
            name={`blocks.${index}.firstItem.title`}
            type="text"
            placeholder="Title"
          />
        </div>

        <div className="my-4 w-full">
          <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
            Value
          </span>
          <div>
            <Controller
              control={control}
              name={`blocks.${index}.firstItem.paragraph`}
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

      <div className="mb-4 w-full">
        <span className="mb-6 font-bold">Second parapgraph</span>
        <div className="flex w-full my-4">
          <Input
            width="w-full"
            register={register}
            options={{ required: "Please add a title" }}
            error={errors.slug}
            label="Title"
            name={`blocks.${index}.secondItem.title`}
            type="text"
            placeholder="Title"
          />
        </div>

        <div className="mb-4 w-full">
          <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
            Value
          </span>
          <div>
            <Controller
              control={control}
              name={`blocks.${index}.secondItem.paragraph`}
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
    </div>
  );
};
