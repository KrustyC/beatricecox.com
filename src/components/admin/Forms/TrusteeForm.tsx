import { Controller, useForm } from "react-hook-form";
import { Trustee } from "@/types/global";
import { isValidDescription } from "@/utils/validators";
import { LoadingSpinner } from "../LoadingSpinner";
import { Input } from "../Input";
import { Editor } from "../Editor";

interface TrusteeFormProps {
  className?: string;
  trustee?: Trustee;
  pending?: boolean;
  onSaveTrustee: (trustee: Trustee) => void;
}

const DEFAULT_TRUSTEE: Trustee = {
  name: "",
  description: "",
};

export const TrusteeForm: React.FC<
  React.PropsWithChildren<TrusteeFormProps>
> = ({ trustee = DEFAULT_TRUSTEE, pending, onSaveTrustee }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Trustee>({
    defaultValues: { ...trustee },
  });

  return (
    <form
      className="flex flex-col w-full"
      onSubmit={handleSubmit(onSaveTrustee)}
    >
      <div className="flex mb-8 w-full">
        <Input
          register={register}
          options={{ required: "Please add a postcode" }}
          error={errors.name}
          label="Name"
          name="name"
          type="text"
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col mb-8 w-full">
        <label className="uppercase block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <div>
          <Controller
            control={control}
            name="description"
            rules={{ validate: isValidDescription }}
            render={({ field: { onBlur, onChange, value } }) => (
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

      <div className="flex items-center border-t-2 border-slate-300 pt-4 h-24">
        <button
          className="btn-admin btn-primary mr-4"
          type="submit"
          // disabled={pending || !isValid || !isDirty}
          disabled={pending || !isValid || !isDirty}
        >
          {pending ? <LoadingSpinner /> : "Save Trustee"}
        </button>
      </div>
    </form>
  );
};
