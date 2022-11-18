import { useState } from "react";
import { ProjectBlock, BaseBlock } from "@/types/global";

import { FormBlock } from "./FormBlock";
import { BlockTypeModal } from "./BlockTypeModal";

interface MultipleImagesProps {
  blocks: ProjectBlock[];
  onCreateBlock: (newBlock: Partial<BaseBlock>) => void;
  onRemoveBlock: (index: number) => void;
}

export const FormBlocks: React.FC<MultipleImagesProps> = ({
  blocks,
  onCreateBlock,
  onRemoveBlock,
}) => {
  const [showBlockModal, setShowBlockModal] = useState(false);

  const onConfirmCreateBLock = (newBlock: Partial<BaseBlock>) => {
    onCreateBlock(newBlock);
    setShowBlockModal(false);
  };

  return (
    <>
      {showBlockModal && (
        <BlockTypeModal
          onCreateBlock={onConfirmCreateBLock}
          onCancel={() => setShowBlockModal(false)}
        />
      )}
      <div className="flex flex-col items-start justify-start mb-8 w-full">
        <span className="uppercase block text-gray-700 font-bold text-lg mb-6">
          Blocks
        </span>

        {blocks.map((block, i) => (
          <FormBlock
            key={block.id}
            block={block}
            index={i}
            onRemoveBlock={onRemoveBlock}
          />
        ))}

        <button
          className="btn-admin btn-dark mt-8"
          type="button"
          onClick={() => setShowBlockModal(true)}
        >
          Add Block
        </button>
      </div>
    </>
  );
};