import {
  BaseBlock,
  FullScreenBlock as IFullScreenBlock,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";
import Image from "next/image";

export function blockIsFullScreenBlock(
  block: Partial<BaseBlock> | ProjectBlock
): block is IFullScreenBlock {
  return block.type === ProjectBlockType.FULL_SCREEN;
}

interface FullScreenBlockProps {
  block: IFullScreenBlock;
}

export const FullScreenBlock: React.FC<FullScreenBlockProps> = ({ block }) => (
  <div className="h-[350px] lg:h-[900px] w-screen relative">
    <Image
      alt=""
      src={block.image}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
  </div>
);
