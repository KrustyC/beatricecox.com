import { useState } from "react";
import { uuid } from "uuidv4";
import { BaseBlock, ProjectBlockType } from "@/types/global";
import { Modal } from "../../../Modal";

interface MultipleImagesModalProps {
  onCreateBlock: (block: Partial<BaseBlock>) => void;
  onCancel: VoidFunction;
}

export const BlockTypeModal: React.FC<MultipleImagesModalProps> = ({
  onCreateBlock,
  onCancel,
}) => {
  const [type, setType] = useState<ProjectBlockType>();

  const handleCreateBock = () => {
    if (!type) {
      return;
    }

    const newBlock = {
      id: uuid(),
      type,
    };

    onCreateBlock(newBlock);
  };

  return (
    <Modal>
      <div className="w-full flex flex-col">
        <div className="text-left px-5 flex-auto">
          <h2 className="text-2xl text-admin-primary font-manrope font-bold py-4">
            Choose block type
          </h2>
          <p className="text-left text-sm text-gray-500">
            Select the type of block that you{"'"}d like to create. Please
            rememebr to always go in order if possible, because supporting the
            re-order is pain :)
          </p>
        </div>

        <div className="p-10 flex gap-6 bg-red">
          <div
            className="h-12 rounded-lg border-2 border-primary flex items-center jusitfy-center px-4 cursor-pointer hover:bg-primary"
            onClick={() => setType(ProjectBlockType.PROJECT_INFO)}
          >
            Griglia
          </div>

          <div
            className="h-12 rounded-lg border-2 border-primary flex items-center jusitfy-center px-4 cursor-pointer hover:bg-primary"
            onClick={() => setType(ProjectBlockType.TWO_TITLES_AND_PARAGRAPH)}
          >
            Titles with Side Paragrpahs
          </div>

          <div
            className="h-12 rounded-lg border-2 border-primary flex items-center jusitfy-center px-4 cursor-pointer hover:bg-primary"
            onClick={() => setType(ProjectBlockType.DESCRIPTION_AND_PICS)}
          >
            Images and description
          </div>

          <div
            className="h-12 rounded-lg border-2 border-primary flex items-center jusitfy-center px-4 cursor-pointer hover:bg-primary"
            onClick={() => setType(ProjectBlockType.FOUR_IMAGES_WITH_TEXT)}
          >
            4 Images with Text
          </div>

          <div
            className="h-12 rounded-lg border-2 border-primary flex items-center jusitfy-center px-4 cursor-pointer hover:bg-primary"
            onClick={() => setType(ProjectBlockType.CAROUSEL)}
          >
            Carousel
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="btn-admin" onClick={onCancel}>
          {" "}
          Close{" "}
        </button>

        <button
          type="button"
          className="btn-admin btn-primary ml-4"
          disabled={!type}
          onClick={handleCreateBock}
        >
          Create Block
        </button>
      </div>
    </Modal>
  );
};
