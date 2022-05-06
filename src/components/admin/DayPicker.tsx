/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { FieldError } from "react-hook-form";
import { InputErrorMessage } from "./InputErrorMessage";
import "react-day-picker/lib/style.css";

interface DayPickerProps {
  value: string;
  className?: string;
  placeholder?: string;
  error?: FieldError;
  onChange: (date: string) => void;
}

export const DayPicker: React.FC<React.PropsWithChildren<DayPickerProps>> = ({
  error,
}) => {
  return (
    <div className="flex flex-col">
      {error ? <InputErrorMessage message={error.message || ""} /> : null}
    </div>
  );
};
