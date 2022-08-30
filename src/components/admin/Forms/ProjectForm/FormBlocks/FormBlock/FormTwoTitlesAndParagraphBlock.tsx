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

export function blockIsTwoTitlesAndParagraphBlock(
  block: ProjectBlock
): block is TwoTitlesAndParagraphBlock {
  return block.type === ProjectBlockType.TWO_TITLES_AND_PARAGRAPH;
}

interface FormTwoTitlesAndParagraphBlockProps {
  block: TwoTitlesAndParagraphBlock;
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
        <span className="font-bold uppercase mr-4">Block Type:</span>2 Titles
        and Paragraphs
      </span>

      <div className="mb-4 w-full border-b-2 border-[black]">
        <span className="mb-6">First parapgraph</span>
        <div className="flex w-full my-4">
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

        <div className="mb-4 w-full">
          <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
            Description
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
        <span className="mb-6">Second parapgraph</span>
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
            Description
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
