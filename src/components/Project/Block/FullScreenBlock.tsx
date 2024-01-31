import Image from "next/image";

import {
  BaseBlock,
  FullScreenBlock as IFullScreenBlock,
  ProjectBlock,
  ProjectBlockType,
} from "@/types/global";

export function blockIsFullScreenBlock(
  block: Partial<BaseBlock> | ProjectBlock
): block is IFullScreenBlock {
  return block.type === ProjectBlockType.FULL_SCREEN;
}

interface FullScreenBlockProps {
  block: IFullScreenBlock;
}

export const FullScreenBlock: React.FC<FullScreenBlockProps> = ({ block }) => (
  <div className="project-section">
    <div className="w-screen aspect-square lg:aspect-auto lg:h-[900px]  relative">
      <Image
        fill
        alt={block.image.description || ""}
        src={block.image.url || ""}
        loading="lazy"
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  </div>
);
