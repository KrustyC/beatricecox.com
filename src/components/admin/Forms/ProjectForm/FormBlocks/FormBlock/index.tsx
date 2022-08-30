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

interface BlockProps {
  block: ProjectBlock;
  index: number;
}

export const FormBlock: React.FC<BlockProps> = ({ index, block }) => {
  const renderBlock = ({ block: currentBlock, ...rest }: BlockProps) => {
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

  return (
    <div className="flex p-8 w-full flex-col items-start justify-start border-2 rounded mt-6">
      {renderBlock({ index, block })}
    </div>
  );
};
