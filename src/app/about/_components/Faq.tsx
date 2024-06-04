import { CollapsibleContainer } from "@/components/CollapsibleContainer";

export const Faq: React.FC = () => {
  return (
    <CollapsibleContainer title="FAQ" variant="primary">
      <div className="w-full md:w-1/2 text-lg text-white">FAQ me</div>
    </CollapsibleContainer>
  );
};
