import Link from "next/link";

import { CollapsibleContainer } from "@/components/CollapsibleContainer";

import { TitleAndCopy } from "./TextAndCopy";

export const Expertise: React.FC = () => {
  return (
    <CollapsibleContainer title="Expertise" variant="black">
      <div className="flex flex-col gfap-8">
        <div className="w-full flex text-white gap-16">
          <TitleAndCopy title="Brand Strategy" variant="light">
            <p className="text-regular">
              Working with businesses{"'"} to create or improve their
              identities, creating harmonious and consistent brands on multiple
              levels by habilitating people to tell their unique story.
            </p>
          </TitleAndCopy>

          <TitleAndCopy title="Packaging" variant="light">
            <p className="text-regular">
              Moulding your brand to coherent packaging and label design, from
              studying the design to preparing technical artwork, I create
              bespoke solutions for primary, secondary and tertiary packaging.
            </p>
          </TitleAndCopy>

          <TitleAndCopy title="UX/UI & Digital" variant="light">
            <p className="text-regular">
              Whether it’s a one-page marketing website, an e-commerce or a
              launch on social, I have helped clients get all three and know how
              to take your idea from prototype to the final product.
            </p>
          </TitleAndCopy>
        </div>
        <Link
          className="mt-8 text-regular tracking-[.3rem] font-light font-manrope uppercase text-white"
          href="/#projects"
        >
          See projects
        </Link>
      </div>
    </CollapsibleContainer>
  );
};
