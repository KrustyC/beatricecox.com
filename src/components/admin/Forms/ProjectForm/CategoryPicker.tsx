/* eslint-disable @next/next/no-img-element */
import { ProjectCategory } from "@/types/app";
import { useMemo, useState } from "react";

interface CategoryPickerProps {
  currentValue: ProjectCategory | string;
  onChange: (newCategory: ProjectCategory | string) => void;
  onBlur: VoidFunction;
}

export const CategoryPicker: React.FC<
  React.PropsWithChildren<CategoryPickerProps>
> = ({ currentValue, onChange, onBlur }) => {
  const defaultValue = useMemo(() => {
    const isCustomCategory = !Object.values(ProjectCategory).includes(
      currentValue as unknown as ProjectCategory
    );

    return isCustomCategory ? ProjectCategory.OTHER : currentValue;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isCustom, setIsCustom] = useState(
    defaultValue === ProjectCategory.OTHER
  );
  const [customCategory, setCustomCategory] = useState(
    defaultValue === ProjectCategory.OTHER ? currentValue : ""
  );

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onBlur();
    if (value !== ProjectCategory.OTHER) {
      setIsCustom(false);
      onChange(value);
      return;
    }

    setIsCustom(true);
  };

  const onChangeCustomCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomCategory(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-full flex justify-start items-center">
      <select
        defaultValue={defaultValue}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={onSelectChange}
      >
        {Object.entries(ProjectCategory).map(([key, value]) => (
          <option key={key}>{value}</option>
        ))}
      </select>
      {isCustom && (
        <div className="ml-4">
          <input
            value={customCategory}
            onChange={onChangeCustomCategory}
            placeholder="Add a custom category"
            type="text"
            className="w-full shadow appearance-none borderrounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      )}
    </div>
  );
};
