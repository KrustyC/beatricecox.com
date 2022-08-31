import { useState } from "react";
import { FieldError } from "react-hook-form";
import { InputErrorMessage } from "../InputErrorMessage";
import { ImageSelectorModal } from "./ImageSelectorModal";

interface ImageSelectorProps {
  currentImage?: string;
  size?: string;
  error?: FieldError;
  onBlur?: VoidFunction;
  onSelectImage: (image: string) => void;
}

export const ImageSelector: React.FC<
  React.PropsWithChildren<ImageSelectorProps>
> = ({ currentImage, size = "h-96 w-96", error, onBlur, onSelectImage }) => {
  const [showModal, setShowModal] = useState(false);

  const onDisplayModal = () => {
    setShowModal(true);
  };

  const onCancel = () => {
    onBlur?.();
    setShowModal(false);
  };

  const onImageSelected = (selectedImage: string) => {
    onSelectImage(selectedImage);
    setShowModal(false);
    onBlur?.();
  };

  return (
    <>
      <div className="flex flex-col items-start">
        {currentImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={currentImage}
            alt="Selected image"
            className={`${size} object-contain border-2 border-slate-300`}
          />
        ) : (
          <div
            className={`${size} flex justify-center items-center border border-slate-300 ${
              error ? "border-red-500" : ""
            } bg-gray-200`}
          >
            <p className="uppercase text-gray-800">No image selected</p>
          </div>
        )}

        <button
          type="button"
          className="btn-admin btn-primary btn-sm mt-2"
          onClick={onDisplayModal}
        >
          {currentImage ? "Update" : "Choose"} From Gallery
        </button>

        {error ? <InputErrorMessage message={error.message || ""} /> : null}
      </div>
      {showModal ? (
        <ImageSelectorModal
          onImageSelected={onImageSelected}
          onCancel={onCancel}
        />
      ) : null}
    </>
  );
};
