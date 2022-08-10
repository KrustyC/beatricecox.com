/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import slugify from "slugify";
import { Controller, useForm } from "react-hook-form";
import { Project } from "@/types/global";
import { isValidCategory, isValidDescription } from "@/utils/validators";
import { ProjectCategory } from "@/types/app";

import { LoadingSpinner } from "../../LoadingSpinner";
import { Input } from "../../Input";
import { Editor } from "../../Editor";
import { ImageSelector } from "../../ImageSelector";
import { CategoryPicker } from "./CategoryPicker";

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
  const {
    register,
    control,
    getValues,
    setValue,
    // watch,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Project>({
    defaultValues: {
      ...project,
    },
    mode: "onBlur",
  });

  const onCreateSlugFromTitle = () => {
    const title = getValues("title");
    setValue("slug", slugify(title, { lower: true }));
  };

  console.log("errors", errors);

  // const { fields, replace } = useFieldArray({
  //   control,
  //   name: "blocks",
  // });

  // const watchFieldArray = watch("blocks");

  const onSubmit = (data: Project) => {
    onSaveProject({
      ...data,
    });
  };

  // const controlledFields = fields.map((field, index) => {
  //   return {
  //     ...field,
  //     ...watchFieldArray[index],
  //   };
  // });

  // const onChangeBlocks = (blocks: ProejctBlock[]) => {
  //   replace(blocks);
  // };

  return (
    <form
      className="flex flex-col w-9/12"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className="flex  flex-col w-full mb-8">
        <div className="mb-4">
          <Input
            register={register}
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
              register={register}
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
              register={register}
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
              control={control}
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
              control={control}
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
              control={control}
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
            control={control}
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
            control={control}
          />
        </div>
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
  );
};
