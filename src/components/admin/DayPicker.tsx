/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { FieldError } from "react-hook-form";
import { format as dateFnsFormat } from "date-fns";
import { InputErrorMessage } from "./InputErrorMessage";
import "react-day-picker/lib/style.css";

interface DayPickerProps {
  value: string;
  className?: string;
  placeholder?: string;
  error?: FieldError;
  onChange: (date: string) => void;
}

const FORMAT = "dd/MM/yyyy";

export const DayPicker: React.FC<DayPickerProps> = ({
  value,
  className = "",
  placeholder = "DD/MM/YYYY",
  error,
  onChange,
}) => {
  const onDayChange = (day: Date) => {
    try {
      onChange(dateFnsFormat(day, FORMAT));
    } catch (e) {}
  };

  return (
    <div className="flex flex-col">
      <DayPickerInput
        value={value}
        placeholder={placeholder}
        format={FORMAT}
        component={React.forwardRef((props: any, ref) => (
          <input
            {...props}
            ref={ref}
            className={`shadow appearance-none border ${
              error ? "border-red-500" : ""
            } rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
          />
        ))}
        formatDate={(date, format) => dateFnsFormat(date, format)}
        onDayChange={onDayChange}
      />
      {error ? <InputErrorMessage message={error.message || ""} /> : null}
    </div>
  );
};
