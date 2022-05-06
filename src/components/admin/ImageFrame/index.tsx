/* eslint-disable @next/next/no-img-element */
import styles from "./ImageFrame.module.css";

interface ImageFrameProps {
  image: string;
  isSelected?: boolean;
}

export const ImageFrame: React.FC<React.PropsWithChildren<ImageFrameProps>> = ({
  image,
  isSelected = false,
}) => (
  <div
    className={`${styles["img-frame"]} ${
      isSelected ? styles["img-frame-selected"] : ""
    }`}
  >
    <div className={styles["img-container"]}>
      <img src={image} width="100%" height="20px" alt="image" />
    </div>
  </div>
);
