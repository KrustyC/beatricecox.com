import Image from "next/image";

export const ChickenImage: React.FC = () => {
  return (
    <Image
      src="/images/chicken.gif"
      alt="An animation of a chicken laying an egg that cracks"
      width={260}
      height={350}
      style={{ aspectRatio: "4/3", objectFit: "cover" }}
    />
  );
};
