import { useState } from "react";
import { MaterialLink } from "@/types/global";
import { MaterialLinkModal } from "./MaterialLinkModal";

interface RHFMaterialLinkProps {
  value: MaterialLink;
  onConfirm: (newLink: MaterialLink) => void;
}

export type FileEventTarget = React.ChangeEventHandler<HTMLInputElement> & {
  target: { files: FileList };
};

export const RHFMaterialLink: React.FC<RHFMaterialLinkProps> = ({
  value,
  onConfirm,
}) => {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onConfirmMaterial = (materialLink: MaterialLink) => {
    onConfirm(materialLink);
    onCloseModal();
  };

  return (
    <div>
      {value ? (
        <div className="flex cursor-pointer" onClick={onShowModal}>
          <span className="w-40 overflow-hidden truncate text-ellipsis">
            {value.value}
          </span>{" "}
          ({value.type})
        </div>
      ) : (
        <span className="cursor-pointer text-primary" onClick={onShowModal}>
          Select a link for the material
        </span>
      )}

      {showModal && (
        <MaterialLinkModal
          value={value}
          onConfirm={onConfirmMaterial}
          onCancel={onCloseModal}
        />
      )}
    </div>
  );
};
