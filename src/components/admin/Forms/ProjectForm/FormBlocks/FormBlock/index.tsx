import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { BinIcon } from "@/components/icons/Bin";
import { ProjectBlock } from "@/types/global";
import {
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";

import {
  blockIsProjectInfoBlock,
  FormProjectInfoBlock,
} from "./FormProjectInfoBlock";
import {
  blockIsDescriptionAndPicsBlock,
  FormDescriptionAndPicsBlock,
} from "./FormDescriptionAndPicsBlock";
import {
  blockIsTwoTitlesAndParagraphBlock,
  FormTwoTitlesAndParagraphBlock,
} from "./FormTwoTitlesAndParagraphBlock";
import {
  blockIsFourImagesWithTextBlock,
  FormFourImagesWithTextBlock,
} from "./FormFourImagesWithTextBlock";
import { blockIsCarouselBlock, FormCarouselBlock } from "./FormCarouselBlock";
import {
  blockIsTitleAndTextBlock,
  FormTitleAndTextBlock,
} from "./FormTitleAndTextBlock";
import {
  blockIsFullScreenBlock,
  FormFullScreenBlock,
} from "./FormFullScreenBlock";

interface BlockProps {
  block: ProjectBlock;
  index: number;
  onRemoveBlock: (index: number) => void;
}

const getBlockStyle = (
  isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined
) => ({
  width: "100%",
  // change background colour if dragging
  background: isDragging ? "lightgreen" : "white",
  // styles we need to apply on draggables
  ...draggableStyle,
});

export const FormBlock: React.FC<BlockProps> = ({
  index,
  block,
  onRemoveBlock,
}) => {
  const [showAllBlock, setShowAllBlock] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    block.backgroundColor || "#FFFFFF"
  );
  const ref = useRef<HTMLButtonElement>(null);
  const [wantToRemove, setWantToRemove] = useState(false);

  useOnClickOutside(ref, () => {
    setWantToRemove(false);
  });

  const onToggleShowAllBlock = () => setShowAllBlock((current) => !current);

  const onRemoveButtonCLick = () => {
    if (!wantToRemove) {
      setWantToRemove(true);
      return;
    }

    onRemoveBlock(index);
  };

  return (
    <Draggable
      key={block.id}
      draggableId={block.id}
      index={index}
      isDragDisabled={showAllBlock}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getBlockStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <div className="flex p-3 w-full flex-col items-start justify-start border-2 rounded mb-6 relative">
            <div className="flex absolute top-6 right-6 z-40">
              <button
                type="button"
                ref={ref}
                className="btn-admin btn-primary px-3 flex items-center h-8 text-xs mr-2"
                onClick={onToggleShowAllBlock}
              >
                {showAllBlock ? "Hide" : "Show"}
              </button>

              <button
                type="button"
                ref={ref}
                className="btn-admin btn-danger px-3 flex items-center h-8 text-xs"
                onClick={onRemoveButtonCLick}
              >
                <BinIcon className="h-4 w-4 text-[#EDB8B8] fill-white" />
                {wantToRemove && "Confirm?"}
              </button>
            </div>

            <div
              className="absolute top-0 left-o right-0 h-[100px] w-full z-1"
              style={{ background: backgroundColor }}
            />

            {blockIsProjectInfoBlock(block) && (
              <FormProjectInfoBlock
                index={index}
                showAllBlock={showAllBlock}
                onColorChange={setBackgroundColor}
              />
            )}

            {blockIsTwoTitlesAndParagraphBlock(block) && (
              <FormTwoTitlesAndParagraphBlock
                index={index}
                showAllBlock={showAllBlock}
                onColorChange={setBackgroundColor}
              />
            )}

            {blockIsDescriptionAndPicsBlock(block) && (
              <FormDescriptionAndPicsBlock
                index={index}
                showAllBlock={showAllBlock}
                onColorChange={setBackgroundColor}
              />
            )}

            {blockIsFourImagesWithTextBlock(block) && (
              <FormFourImagesWithTextBlock
                index={index}
                showAllBlock={showAllBlock}
                onColorChange={setBackgroundColor}
              />
            )}

            {blockIsCarouselBlock(block) && (
              <FormCarouselBlock
                index={index}
                showAllBlock={showAllBlock}
                onColorChange={setBackgroundColor}
              />
            )}

            {blockIsTitleAndTextBlock(block) && (
              <FormTitleAndTextBlock
                index={index}
                showAllBlock={showAllBlock}
                onColorChange={setBackgroundColor}
              />
            )}

            {blockIsFullScreenBlock(block) && (
              <FormFullScreenBlock
                index={index}
                showAllBlock={showAllBlock}
                onColorChange={setBackgroundColor}
              />
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};
