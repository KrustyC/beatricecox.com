import { TitleAndCopy } from "@/components/TitleAndCopy";

const items = [
  {
    title: "Brand Strategy & Campaigns",
    variant: "light" as const,
    description:
      "I work with individuals and businesses to shape their identities into something that aligns with their personality and vision. Expanding a brand in multiple areas and transforming it in a coherent way by using the right approaches.",
  },
  {
    title: "Brand Assets & Packaging",
    variant: "light" as const,
    description:
      "Moulding your brand to create coherent material, whether that be, branded assets, campaigns, packaging or label design. I provide both graphic artwork and technical support and have worked in primary, secondary and tertiary packaging areas.",
  },
  {
    title: "UX/UI & Online Strategy",
    variant: "light" as const,
    description:
      "It might be a one-page marketing website, an e-commerce or a launch on social including initial SEO and social media strategy. I have worked with clients get all three and know how to take your idea from prototype to the final product. Introduction to social media planning and SEO.",
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
