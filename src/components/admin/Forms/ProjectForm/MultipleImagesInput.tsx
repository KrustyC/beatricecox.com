/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { FormProjectImage } from "@/types/global";
import { MultipleImagesModal } from "./MultipleImagesModal";
import { ImageFrame } from "../../ImageFrame";

interface MultipleImagesProps {
  images: FormProjectImage[];
  onChangeImages: (images: FormProjectImage[]) => void;
}

export const MultipleImagesInput: React.FC<
  React.PropsWithChildren<MultipleImagesProps>
> = ({ images, onChangeImages }) => {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  };

  const onConfirm = (images: FormProjectImage[]) => {
    onChangeImages(images);
    setShowModal(false);
  };

  const onCancel = () => setShowModal(false);

  return (
    <div className="flex flex-col items-start justify-start">
      {images.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {images.map(({ image }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <ImageFrame key={image} image={image} />
          ))}
        </div>
      ) : (
        <div>No Image selected yet</div>
      )}

      <button
        className="btn-admin btn-primary btn-sm mt-4"
        type="button"
        onClick={onShowModal}
      >
        Edit Images
      </button>

      {showModal && (
        <MultipleImagesModal
          images={images}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};
