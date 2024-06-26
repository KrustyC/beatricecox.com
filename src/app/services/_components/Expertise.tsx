import { TitleAndCopy } from "@/components/TitleAndCopy";

export const Expertise: React.FC = () => {
  return (
    <div className="bg-black container-x-padding flex flex-col py-20">
      <div className="w-full flex text-white gap-16">
        <TitleAndCopy title="Brand Strategy" variant="light">
          <p className="text-regular">
            Working with businesses{"'"} to create or improve their identities,
            creating harmonious and consistent brands on multiple levels by
            habilitating people to tell their unique story.
          </p>
        </TitleAndCopy>

        <TitleAndCopy title="Packaging" variant="light">
          <p className="text-regular">
            Moulding your brand to coherent packaging and label design, from
            studying the design to preparing technical artwork, I create bespoke
            solutions for primary, secondary and tertiary packaging.
          </p>
        </TitleAndCopy>

        <TitleAndCopy title="UX/UI & Digital" variant="light">
          <p className="text-regular">
            Whether it{"'"}s a one-page marketing website, an e-commerce or a
            launch on social, I have helped clients get all three and know how
            to take your idea from prototype to the final product.
          </p>
        </TitleAndCopy>
      </div>
    </div>
  );
};
