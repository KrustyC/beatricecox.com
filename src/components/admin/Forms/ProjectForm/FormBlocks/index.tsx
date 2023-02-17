import { useState } from "react";
import { ProjectBlock, BaseBlock } from "@/types/global";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import { FormBlock } from "./FormBlock";
import { BlockTypeModal } from "./BlockTypeModal";

interface MultipleImagesProps {
  blocks: ProjectBlock[];
  onCreateBlock: (newBlock: Partial<BaseBlock>) => void;
  onRemoveBlock: (index: number) => void;
  onReplaceBlocks: (index: Array<Partial<BaseBlock>>) => void;
}

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "white",
  width: "100%",
});

export const FormBlocks: React.FC<MultipleImagesProps> = ({
  blocks,
  onCreateBlock,
  onRemoveBlock,
  onReplaceBlocks,
}) => {
  const [showBlockModal, setShowBlockModal] = useState(false);

  const onConfirmCreateBLock = (newBlock: Partial<BaseBlock>) => {
    onCreateBlock(newBlock);
    setShowBlockModal(false);
  };

  const onDragEnd = (result: DropResult) => {
    const startIndex = result.source.index;
    const endIndex = result.destination?.index;

    if (!endIndex && endIndex !== 0) {
      return;
    }

    const updatedBlocks = [...blocks];
    const [removed] = updatedBlocks.splice(startIndex, 1);
    updatedBlocks.splice(endIndex, 0, removed);

    onReplaceBlocks(updatedBlocks);
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

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {blocks.map((block, i) => (
                  <FormBlock
                    key={block.id}
                    block={block}
                    index={i}
                    onRemoveBlock={onRemoveBlock}
                  />
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>

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
