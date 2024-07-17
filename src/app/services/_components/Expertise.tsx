import { TitleAndCopy } from "@/components/TitleAndCopy";

const items = [
  {
    title: "Brand Strategy",
    variant: "light" as "dark" | "light",
    description:
      "Working with businesses to create or improve their identities, creating harmonious and consistent brands on multiple levels by habilitating people to tell their unique story.",
  },
  {
    title: "Packaging",
    variant: "light" as "dark" | "light",
    description:
      "Moulding your brand to coherent packaging and label design, from studying the design to preparing technical artwork, I create bespoke solutions for primary, secondary and tertiary packaging.",
  },
  {
    title: "UX/UI & Digital",
    variant: "light" as "dark" | "light",
    description:
      "Whether it's a one-page marketing website, an e-commerce or a launch on social, I have helped clients get all three and know how to take your idea from prototype to the final product.",
  },
];

export const Expertise: React.FC = () => {
  return (
    <div className="bg-black container-x-padding flex flex-col py-20 lg:pb-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-24 3xl:gap-36">
        {items.map((item, index) => (
          <TitleAndCopy key={index} title={item.title} variant={item.variant}>
            <p className="text-regular text-white">{item.description}</p>
          </TitleAndCopy>
        ))}
      </div>
    </div>
  );
};
