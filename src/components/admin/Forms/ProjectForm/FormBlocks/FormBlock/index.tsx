import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { BinIcon } from "@/components/icons/Bin";
import { ProjectBlock } from "@/types/global";
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

interface BlockProps {
  block: ProjectBlock;
  index: number;
  onRemoveBlock: (index: number) => void;
}

export const FormBlock: React.FC<BlockProps> = ({
  index,
  block,
  onRemoveBlock,
}) => {
  const [showAllBlock, setShowAllBlock] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(
    block.backgroundColor || "#FFFFFF"
  );
  const ref = useRef<HTMLButtonElement>(null);
  const [wantToRemove, setWantToRemove] = useState(false);

  useOnClickOutside(ref, () => {
    setWantToRemove(false);
  });

  // const renderBlock = ({
  //   block: currentBlock,
  //   index,
  // }: Omit<BlockProps, "onRemoveBlock">) => {
  //   if (blockIsProjectInfoBlock(currentBlock)) {
  //     return (
  //       <FormProjectInfoBlock
  //         index={index}
  //         onColorChange={setBackgroundColor}
  //       />
  //     );
  //   }

  //   if (blockIsTwoTitlesAndParagraphBlock(currentBlock)) {
  //     return <FormTwoTitlesAndParagraphBlock index={index} />;
  //   }

  //   if (blockIsDescriptionAndPicsBlock(currentBlock)) {
  //     return <FormDescriptionAndPicsBlock index={index} />;
  //   }

  //   if (blockIsFourImagesWithTextBlock(currentBlock)) {
  //     return <FormFourImagesWithTextBlock index={index} />;
  //   }

  //   if (blockIsCarouselBlock(currentBlock)) {
  //     return <FormCarouselBlock index={index} />;
  //   }

  //   if (blockIsTitleAndTextBlock(currentBlock)) {
  //     return <FormTitleAndTextBlock index={index} />;
  //   }

  //   return null;
  // };

  const onToggleShowAllBlock = () => setShowAllBlock((current) => !current);

  const onRemoveButtonCLick = () => {
    if (!wantToRemove) {
      setWantToRemove(true);
      return;
    }

    onRemoveBlock(index);
  };

  return (
    <div className="flex p-3 w-full flex-col items-start justify-start border-2 rounded mt-6 relative">
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

      {/*     
    

   

    if (blockIsTitleAndTextBlock(currentBlock)) {
      return <FormTitleAndTextBlock index={index} />;
    } */}
    </div>
  );
};
