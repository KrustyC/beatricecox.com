/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import slugify from "slugify";
import {
  FormProvider,
  Controller,
  useForm,
  useFieldArray,
} from "react-hook-form";
import { BaseBlock, Project, ProjectBlock } from "@/types/global";
import { isValidCategory, isValidDescription } from "@/utils/validators";
import { ProjectCategory } from "@/types/app";

import { LoadingSpinner } from "../../LoadingSpinner";
import { Input } from "../../Input";
import { Editor } from "../../Editor";
import { ImageSelector } from "../../ImageSelector";
import { CategoryPicker } from "./CategoryPicker";
import { FormBlocks } from "./FormBlocks";

interface ProjectFormProps {
  className?: string;
  project?: Project;
  pending?: boolean;
  onSaveProject: (project: Project) => void;
}

const DEFAULT_PROJECT: Project = {
  img: "",
  title: "",
  slug: "",
  category: ProjectCategory.UX_UI,
  year: 2020,
  intro: "",
  description: "",
  mainImage: "",
  listingImage: "",
  blocks: [],
};

export const ProjectForm: React.FC<
  React.PropsWithChildren<ProjectFormProps>
> = ({ project = DEFAULT_PROJECT, pending, onSaveProject }) => {
  const methods = useForm<Project>({
    defaultValues: {
      ...project,
    },
    mode: "onBlur",
  });

  const { isDirty, errors, isValid } = methods.formState;

  const onCreateSlugFromTitle = () => {
    const title = methods.getValues("title");
    methods.setValue("slug", slugify(title, { lower: true }));
  };

  const { fields, append, remove, replace } = useFieldArray({
    control: methods.control,
    name: "blocks",
  });

  const watchFieldArray = methods.watch("blocks");

  const onSubmit = (data: Project) => {
    onSaveProject({
      ...data,
    });
  };

  const blocks = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const onCreateBlock = (newBlock: Partial<BaseBlock>) => {
    append(newBlock);
  };

  const onRemoveBlock = (index: number) => {
    remove(index);
  };

  const onReplaceBlocks = (updateBlocks: Array<Partial<BaseBlock>>) => {
    replace(updateBlocks);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col w-9/12"
        onSubmit={methods.handleSubmit((data) => onSubmit(data))}
      >
        <div className="flex  flex-col w-full mb-8">
          <div className="mb-4">
            <Input
              register={methods.register}
              options={{ required: "Please add a name" }}
              error={errors.title}
              label="Name"
              name="title"
              type="text"
              placeholder="Project Name"
            />
          </div>

          <div className="flex items-end mb-4">
            <div className="mr-4">
              <Input
                register={methods.register}
                options={{ required: "Please add a year" }}
                error={errors.year}
                label="Year"
                name="year"
                type="number"
                placeholder="YYYY"
              />
            </div>
            <div className="flex-1 flex items-end">
              <Input
                width="w-full"
                register={methods.register}
                options={{ required: "Please add a slug" }}
                error={errors.slug}
                label="Slug"
                name="slug"
                type="text"
                placeholder="Project Slug"
              />
              <button
                className="btn-admin btn-primary ml-4 h-[38px] w-[400px]"
                type="button"
                onClick={onCreateSlugFromTitle}
              >
                Create from title
              </button>
            </div>
          </div>

          <div className="mb-4">
            <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Category
            </span>
            <div>
              <Controller
                control={methods.control}
                name="category"
                rules={{ validate: isValidCategory }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CategoryPicker
                    currentValue={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </div>
          </div>

          <div className="mb-4">
            <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Short Intro
            </span>
            <div>
              <Controller
                control={methods.control}
                name="intro"
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

          <div className="mb-8">
            <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Description
            </span>
            <div>
              <Controller
                control={methods.control}
                name="description"
                rules={{ validate: isValidDescription }}
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

          <div className="mb-4">
            <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Main Image
            </span>
            <Controller
              name="mainImage"
              rules={{ required: "Please make sure to add an image" }}
              render={(props) => (
                <ImageSelector
                  currentImage={props.field.value}
                  error={errors?.mainImage}
                  onBlur={() => props.field.onBlur()}
                  onSelectImage={(image) => {
                    props.field.onChange(image);
                  }}
                />
              )}
              control={methods.control}
            />
          </div>

          <div className="mb-4">
            <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
              Listing Image
            </span>
            <Controller
              name="listingImage"
              rules={{ required: "Please make sure to add an image" }}
              render={(props) => (
                <ImageSelector
                  currentImage={props.field.value}
                  error={errors?.listingImage}
                  onBlur={() => props.field.onBlur()}
                  onSelectImage={(image) => {
                    props.field.onChange(image);
                  }}
                />
              )}
              control={methods.control}
            />
          </div>
        </div>

        <div>
          <FormBlocks
            blocks={blocks as unknown as ProjectBlock[]} // bit of an hack for the time being
            onCreateBlock={onCreateBlock}
            onRemoveBlock={onRemoveBlock}
            onReplaceBlocks={onReplaceBlocks}
          />
        </div>

        <div className="flex items-center border-t-2 border-slate-300 pt-4 h-24">
          <button
            className="btn-admin btn-primary mr-4"
            type="submit"
            disabled={pending || !isValid || !isDirty}
          >
            {pending ? <LoadingSpinner /> : "Save Project"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
