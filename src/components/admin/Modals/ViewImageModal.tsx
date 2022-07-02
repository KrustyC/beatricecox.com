/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Modal } from "../Modal";

interface ViewImageModalProps {
  image: string;
  onClose: VoidFunction;
  onWantToDeleteFile: (file: string) => void;
}

export const ViewImageModal: React.FC<
  React.PropsWithChildren<ViewImageModalProps>
> = ({ image, onClose, onWantToDeleteFile }) => {
  return (
    <Modal>
      <div className="w-full flex justify-center">
        <img className="max-w-md" src={image} alt="preview" />
      </div>

      <div className="flex justify-end mt-4">
        <button className="btn-admin" onClick={onClose}>
          {" "}
          Close{" "}
        </button>

        <button
          className="btn-admin btn-danger ml-4"
          onClick={() => onWantToDeleteFile(image)}
        >
          Delete Image
        </button>
      </div>
    </Modal>
  );
};
