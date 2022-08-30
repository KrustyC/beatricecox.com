import { useRef } from "react";
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
import { useState } from "react";

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
  const ref = useRef<HTMLButtonElement>(null);
  const [wantToRemove, setWantToRemove] = useState(false);

  useOnClickOutside(ref, () => {
    setWantToRemove(false);
  });

  const renderBlock = ({
    block: currentBlock,
    ...rest
  }: Omit<BlockProps, "onRemoveBlock">) => {
    if (blockIsProjectInfoBlock(currentBlock)) {
      return <FormProjectInfoBlock block={currentBlock} {...rest} />;
    }

    if (blockIsTwoTitlesAndParagraphBlock(currentBlock)) {
      return <FormTwoTitlesAndParagraphBlock block={currentBlock} {...rest} />;
    }

    if (blockIsDescriptionAndPicsBlock(currentBlock)) {
      return <FormDescriptionAndPicsBlock block={currentBlock} {...rest} />;
    }

    return null;
  };

  const onRemoveButtonCLick = () => {
    if (!wantToRemove) {
      setWantToRemove(true);
      return;
    }

    onRemoveBlock(index);
  };

  return (
    <div className="flex p-8 w-full flex-col items-start justify-start border-2 rounded mt-6 relative">
      <div className="absolute top-6 right-6">
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

      {renderBlock({ index, block })}
    </div>
  );
};
