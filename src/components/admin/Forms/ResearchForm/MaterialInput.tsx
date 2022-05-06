import type { ReactElement } from "react";
import {
  Controller,
  UseFormRegister,
  Control,
  FieldPath,
} from "react-hook-form";
import { DayPicker } from "@/components/admin/DayPicker";
import { RHFMaterialLink } from "@/components/admin/RHFMaterialLink";
import { isValidDate } from "@/utils/validators";
import { MaterialLink } from "@/types/global";

interface MaterialInputProps<T> {
  name: FieldPath<T>;
  control: Control<T>;
  register: UseFormRegister<T>;
  onRemove: VoidFunction;
}

export const MaterialInput = <T extends object>(
  props: MaterialInputProps<T>
): ReactElement | null => {
  const { name, register, control, onRemove } = props;

  return (
    <div className="flex items-center rounded border-b border-slate-500 px-4 py-2 w-full">
      <div className="w-3/12">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 pr-4 leading-tight focus:outline-none w-full"
          type="text"
          placeholder="Name"
          {...register(`${name}.name` as unknown as FieldPath<T>)}
          aria-label="Resource name"
        />
      </div>

      <div className="w-1/12">
        <Controller
          name={`${name}.date` as unknown as FieldPath<T>}
          rules={{ required: true, validate: isValidDate }}
          control={control}
          render={(props) => (
            <DayPicker
              className="border-none shadow-none w-32"
              placeholder="Date"
              value={props.field.value as string}
              onChange={(newDate) => {
                props.field.onChange(newDate);
                props.field.onBlur();
              }}
            />
          )}
        />
      </div>

      <div className="w-1/12">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 pr-4 leading-tight focus:outline-none"
          type="text"
          placeholder="Type"
          {...register(`${name}.type` as unknown as FieldPath<T>)}
          aria-label="type of resource"
        />
      </div>

      <div className="w-3/12">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 pr-4 leading-tight focus:outline-none"
          type="text"
          placeholder="Author or Interviewees"
          {...register(
            `${name}.authorOrInterviewees` as unknown as FieldPath<T>
          )}
          aria-label="Author or Interviewees"
        />
      </div>

      <div className="w-3/12 pl-2 pr-3">
        <Controller
          name={`${name}.link` as unknown as FieldPath<T>}
          control={control}
          render={(props) => (
            console.log("LINK: ", props.field.value),
            (
              <RHFMaterialLink
                value={props.field.value as unknown as MaterialLink}
                onConfirm={(link) => props.field.onChange(link)}
              />
            )
          )}
        />
      </div>

      <button
        className="flex-shrink-0 btn-admin btn-danger btn-sm text-sm w-24"
        type="button"
        onClick={onRemove}
      >
        Delete
      </button>
    </div>
  );
};
