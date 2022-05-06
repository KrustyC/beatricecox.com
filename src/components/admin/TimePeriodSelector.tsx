import type { ReactElement } from "react";
import type {
  FieldPath,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface TimePeriodSelectorProps<T> {
  name: FieldPath<T>;
  className?: string;
  register: UseFormRegister<T>;
  options?: RegisterOptions;
}

const PERIODS = ["AM", "PM"];

export const TimePeriodSelector = <T extends object>(
  props: TimePeriodSelectorProps<T>
): ReactElement | null => {
  const { name, className, register, options } = props;

  return (
    <select
      className={`form-select shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      {...register(name, options)}
    >
      {PERIODS.map((period) => (
        <option key={period} value={period}>
          {period}
        </option>
      ))}
    </select>
  );
};

{
  /*   
  ({
  name,
  className,
  register,
  options,
}: T) => (
  <select
    className={`form-select shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
    {...register(name, options)}
  >
    {PERIODS.map((period) => (
      <option key={period} value={period}>
        {period}
      </option>
    ))}
  </select>
); */
}
