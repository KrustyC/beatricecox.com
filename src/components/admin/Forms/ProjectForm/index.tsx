/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Controller, useForm, useFieldArray } from "react-hook-form";
import { FormProject, FormProjectImage, Project } from "@/types/global";
import { isValidDescription } from "@/utils/validators";
import { LoadingSpinner } from "../../LoadingSpinner";
import { Input } from "../../Input";
import { Editor } from "../../Editor";
import { ProjectLinks } from "./ProjectLinks";
import { MultipleImagesInput } from "./MultipleImagesInput";

interface ProjectFormProps {
  className?: string;
  project?: Project;
  pending?: boolean;
  onSaveProject: (project: Project) => void;
}

const DEFAULT_PROJECT: Project = {
  title: "",
  intro: "",
  description: "",
  images: [],
  links: {
    teacherResources: undefined,
    press: undefined,
    research: undefined,
    shop: undefined,
  },
};

export const ProjectForm: React.FC<ProjectFormProps> = ({
  project = DEFAULT_PROJECT,
  pending,
  onSaveProject,
}) => {
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<FormProject>({
    defaultValues: {
      ...project,
      images:
        project.images?.map((image) => ({
          image,
        })) || [],
    },
    mode: "onBlur",
  });

  const { fields, replace } = useFieldArray({
    control,
    name: "images",
  });

  const watchFieldArray = watch("images");

  const onSubmit = (data: FormProject) => {
    onSaveProject({
      ...data,
      images: data.images.map(({ image }) => image),
      links: {
        teacherResources: data.links.teacherResources?._id
          ? data.links.teacherResources
          : undefined,
        press: data.links.press?._id ? data.links.press : undefined,
        research: data.links.research?._id ? data.links.research : undefined,
        shop: data.links.shop?._id ? data.links.shop : undefined,
      },
    });
  };

  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const onChangeImages = (images: FormProjectImage[]) => {
    replace(images);
  };

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
            Images
          </span>
          <MultipleImagesInput
            images={controlledFields}
            onChangeImages={onChangeImages}
          />
        </div>

        <div>
          <ProjectLinks control={control} />
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
