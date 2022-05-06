import { Controller, useForm, useFieldArray } from "react-hook-form";
import { TeachingResource } from "@/types/global";
import { ImageSelector } from "@/components/admin/ImageSelector";
import { TeachingResourceMaterial } from "@/types/global";
import { LoadingSpinner } from "../../LoadingSpinner";
import { Input } from "../../Input";
import { MaterialInput } from "./MaterialInput";

interface TeachingResourceFormProps {
  className?: string;
  teachingResource?: TeachingResource;
  pending?: boolean;
  onSaveTeachingResource: (teachingResource: TeachingResource) => void;
}

const DEFAULT_TEACHING_RESOURCE: TeachingResource = {
  title: "",
  image: "",
  materials: [],
};

const DEFAULT_MATERIAL: TeachingResourceMaterial = {
  name: "",
  date: "",
  host: "",
  link: undefined,
};

export const TeachingResourceForm: React.FC<TeachingResourceFormProps> = ({
  teachingResource = DEFAULT_TEACHING_RESOURCE,
  pending,
  onSaveTeachingResource,
}) => {
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<TeachingResource>({
    defaultValues: { ...teachingResource },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "materials",
  });

  const watchFieldArray = watch("materials");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const onAddDefaultMaterial = () => {
    append(DEFAULT_MATERIAL);
  };

  const onRemoveMaterial = (index: number) => {
    remove(index);
  };

  return (
    <form
      className="flex flex-col w-full"
      onSubmit={handleSubmit(onSaveTeachingResource)}
    >
      <div className="flex mb-4">
        <div className="mb-4 w-full">
          <Input
            register={register}
            options={{ required: "Please add a title" }}
            error={errors.title}
            label="Title"
            name="title"
            type="text"
            placeholder="Teaching resource Title"
          />
        </div>
      </div>

      <div className="flex flex-col w-2/3">
        <span className="uppercase block text-gray-700 text-sm font-bold mb-2">
          Image
        </span>

        <Controller
          name="image"
          render={(props) => (
            <div className="w-full">
              <ImageSelector
                currentImage={props.field.value}
                error={errors?.image}
                onBlur={() => props.field.onBlur()}
                onSelectImage={(image) => {
                  props.field.onChange(image);
                }}
              />
            </div>
          )}
          control={control}
        />
      </div>

      <div className="mb-8">
        <h3 className="text-lx mt-8 text-gray-700 font-semibold uppercase">
          Materials
        </h3>
        <ul className="mt-4">
          <li className="flex items-center rounded border-b border-slate-500 px-4 py-2 w-full">
            <div className="w-3/12 text-black font-bold">Name</div>
            <div className="w-1/12 text-black font-bold">Date</div>
            <div className="w-3/12 text-black font-bold">Host</div>
            <div className="w-4/12 text-black font-bold">Link</div>
            <div className="w-1/12 text-black font-bold">Actions</div>
          </li>
          {controlledFields.map((material, index) => (
            <li key={material.id} className="mt-4">
              <MaterialInput
                name={`materials.${index}`}
                register={register}
                control={control}
                onRemove={() => onRemoveMaterial(index)}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="btn-admin btn-primary btn-sm font-bold mb-2 mt-8"
          onClick={onAddDefaultMaterial}
        >
          Add material
        </button>
      </div>

      <div className="flex items-center border-t-2 border-slate-300 pt-4 h-24">
        <button
          className="btn-admin btn-primary mr-4"
          type="submit"
          disabled={pending || !isValid || !isDirty}
        >
          {pending ? <LoadingSpinner /> : "Save Teacher Resource"}
        </button>
      </div>
    </form>
  );
};
