import Image from "next/image";

export const ChickenImage: React.FC = () => {
  return (
    <Image
      src="/images/chicken.gif"
      alt="A chicken"
      width={300}
      height={350}
      style={{ aspectRatio: "4/3", objectFit: "cover" }}
    />
  );
};
