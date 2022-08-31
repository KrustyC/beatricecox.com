import { useState } from "react";
import { ChromePicker } from "react-color";

interface CategoryPickerProps {
  currentValue: string | undefined;
  onChange: (nreColor: string) => void;
}

export const ColorPicker: React.FC<CategoryPickerProps> = ({
  currentValue,
  onChange,
}) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleChange = (color: { hex: string }) => {
    onChange(color.hex);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <div className="relative">
      <div className="flex">
        <div
          className="flex items-center justify-center border-2 bg-white border-black h-10 w-10 cursor-pointer"
          onClick={() => setDisplayColorPicker(true)}
        >
          <span
            className="border border-black h-6 w-6"
            style={{ backgroundColor: currentValue }}
          />
        </div>
      </div>

      {displayColorPicker ? (
        <div className="absolute z-50">
          <div
            onClick={handleClose}
            className="fixed top-0 bottom-0 right-0 left-0"
          />
          <ChromePicker color={currentValue} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};
