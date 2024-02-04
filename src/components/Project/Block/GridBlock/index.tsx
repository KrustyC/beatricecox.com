import classnames from "classnames";
import Image from "next/image";

import { GridBlock as IGridBlock, GridBlockSpacing } from "@/types/global";

interface FullScreenBlockProps {
  block: IGridBlock;
}

export const GridBlock: React.FC<FullScreenBlockProps> = ({ block }) => (
  <div
    className={classnames("flex flex-col px-4 lg:px-24 mb-24", {
      "gap-y-0.5": block.spacing === GridBlockSpacing.EXTRA_SMALL,
      "gap-y-1": block.spacing === GridBlockSpacing.SMALL,
      "gap-y-2": block.spacing === GridBlockSpacing.MEDIUM,
      "gap-y-4": block.spacing === GridBlockSpacing.LARGE,
      "gap-y-8": block.spacing === GridBlockSpacing.EXTRA_LARGE,
      "gap-y-16": block.spacing === GridBlockSpacing.EXTRA_EXTRA_LARGE,
    })}
  >
    {block.gridImages.map((gridImage, index) => (
      <div
        key={index}
        className={classnames("flex flex-col lg:flex-row", {
          "gap-0.5": block.spacing === GridBlockSpacing.EXTRA_SMALL,
          "gap-1": block.spacing === GridBlockSpacing.SMALL,
          "gap-2": block.spacing === GridBlockSpacing.MEDIUM,
          "gap-4": block.spacing === GridBlockSpacing.LARGE,
          "gap-8": block.spacing === GridBlockSpacing.EXTRA_LARGE,
          "gap-16": block.spacing === GridBlockSpacing.EXTRA_EXTRA_LARGE,
        })}
      >
        {gridImage.images.map((image, index) => (
          <div key={index} className="relative w-full flex-1">
            <Image
              alt={image.description || ""}
              src={image.url || ""}
              loading="lazy"
              width={image.details.width || 0}
              height={image.details.height || 0}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    ))}
  </div>
);
