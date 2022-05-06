import { Controller, useForm } from "react-hook-form";
import { School } from "@/types/global";
import { Input } from "../Input";
import { LoadingSpinner } from "../LoadingSpinner";

interface SchoolFormProps {
  className?: string;
  school?: School;
  pending?: boolean;
  onSaveSchool: (school: School) => void;
}

const DEFAULT_SCHOOL: School = {
  name: "",
  postcode: "",
  geographicalArea: "",
  type: "primary",
};

export const SchoolForm: React.FC<React.PropsWithChildren<SchoolFormProps>> = ({
  school = DEFAULT_SCHOOL,
  pending,
  onSaveSchool,
}) => {
  const {
    register,
    control,
    formState: { isDirty, errors, isValid },
    handleSubmit,
  } = useForm<School>({
    defaultValues: { ...school },
    mode: "onBlur",
  });

  return (
    <form
      className="flex flex-col w-full"
      onSubmit={handleSubmit(onSaveSchool)}
    >
      <div className="flex mb-8 w-full">
        <Input
          register={register}
          options={{ required: "Please add a name for the school" }}
          error={errors.name}
          label="Name"
          type="text"
          name="name"
          placeholder="John Doe"
          width="w-full"
        />
      </div>

      <div className="flex mb-8">
        <Input
          register={register}
          options={{ required: "Please add a postcode" }}
          error={errors.postcode}
          label="postcode"
          name="postcode"
          type="text"
          placeholder="Postcode"
          width="w-1/2"
        />
      </div>

      <div className="flex mb-8">
        <Input
          register={register}
          options={{ required: "Please add a geographical area" }}
          error={errors.postcode}
          label="geographicalArea"
          name="geographicalArea"
          type="text"
          placeholder="Geographical Area"
          width="w-full"
        />
      </div>

      <div className="flex flex-col mb-8">
        <label className="uppercase block text-gray-700 text-sm font-bold mb-2">
          Type
        </label>
        <div className="flex">
          <Controller
            name="type"
            rules={{ required: "Please make sure to select a school type" }}
            render={(props) => (
              <div>
                <button
                  type="button"
                  className={`btn-admin ${
                    props.field.value === "primary"
                      ? "btn-primary"
                      : "btn-outlined-primary"
                  } ml-0 rounded-r-none w-30`}
                  onClick={() => props.field.onChange("primary")}
                >
                  Primary
                </button>
                <button
                  type="button"
                  className={`btn-admin ${
                    props.field.value === "secondary"
                      ? "btn-primary"
                      : "btn-outlined-primary"
                  } ml-0 rounded-l-none w-30`}
                  onClick={() => props.field.onChange("secondary")}
                >
                  Secondary
                </button>
              </div>
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
          {pending ? <LoadingSpinner /> : "Save School"}
        </button>
      </div>
    </form>
  );
};
