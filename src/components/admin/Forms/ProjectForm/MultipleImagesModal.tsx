/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useNetlifyGetFunction } from "@/hooks/useNetlifyGetFunction";
import { useAuth } from "@/contexts/AuthContext";
import { FormProjectImage } from "@/types/global";
import { ImageFrame } from "../../ImageFrame";
import { Modal } from "../../Modal";
import { LoadingSpinner } from "../../LoadingSpinner";

interface MultipleImagesModalProps {
  images: FormProjectImage[];
  onConfirm: (images: FormProjectImage[]) => void;
  onCancel: VoidFunction;
}

export const MultipleImagesModal: React.FC<
  React.PropsWithChildren<MultipleImagesModalProps>
> = ({ images, onConfirm, onCancel }) => {
  const [selectedImages, setSelectedImages] =
    useState<FormProjectImage[]>(images);

  const { user } = useAuth();
  const { loading, data } = useNetlifyGetFunction<{
    images: string[];
  }>({
    fetchUrlPath: "/admin-images",
    user,
  });

  const allImages = data?.images || [];

  const onConfirmChoices = () => {
    onConfirm(selectedImages);
  };

  const onChooseImage = (image: string) => {
    setSelectedImages([...selectedImages, { image }]);
  };

  return (
    <Modal>
      <div className="w-full flex justify-center">
        <div className="text-left px-5 flex-auto w-1/2">
          <h2 className="text-2xl text-admin-primary font-bold py-4">
            Choose images
          </h2>
          <p className="text-left text-sm text-gray-500">
            Select an image from your gallery. If you can{"'"}t find the image
            you are looking for,{" "}
            <a className="text-admin-link" href="/admin/images" target="_blank">
              click here
            </a>{" "}
            to open the images loading page (in a new tab). Once you have added
            your image, please close and re-open this modal.
          </p>
        </div>

        <div className="h-[500px] max-h-[500px] w-2/3 overflow-scroll pb-4">
          {loading ? (
            <div className="h-24 flex align-center justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4 mt-4 px-5 max-h-[500px] overflow-scroll">
              {allImages.map((image, index) => {
                const isImageSelected = selectedImages.some(
                  (selectedImage) => image === selectedImage.image
                );
                return (
                  <div key={index} className="relative">
                    <ImageFrame image={image} isSelected={isImageSelected} />
                    <button
                      type="button"
                      className="btn-admin btn-outlined-primary btn-sm absolute bottom-2 right-2"
                      onClick={() => onChooseImage(image)}
                    >
                      {isImageSelected ? "Remove" : "Choose"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="btn-admin" onClick={onCancel}>
          {" "}
          Close{" "}
        </button>

        <button
          className="btn-admin btn-primary ml-4"
          onClick={onConfirmChoices}
        >
          Confirm Choices
        </button>
      </div>
    </Modal>
  );
};
