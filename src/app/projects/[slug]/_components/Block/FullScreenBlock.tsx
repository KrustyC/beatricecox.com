import Image from "next/image";

import { FullScreenBlock as IFullScreenBlock } from "@/types/global";

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
        style={{ objectFit: "cover" }}
      />
    </div>
  </div>
);
