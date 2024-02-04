import { TwoTitlesAndParagraphBlock as ITwoTitlesAndParagraphBlock } from "@/types/global";

interface ParagraphProps {
  mb?: string;
  paragraph: Partial<{
    title: string;
    paragraph: string;
  }>;
}

const Paragraph: React.FC<ParagraphProps> = ({ paragraph, mb = "" }) => (
  <div className={`flex ${mb} flex-col lg:flex-row`}>
    <h3 className="lg:w-1/3 font-light text-3xl lg:text-right lg:mr-24">
      {paragraph.title}
    </h3>
    <div className="lg:w-2/3 lg:max-w-2/3 text-lg mt-4 lg:mt-0">
      {paragraph.paragraph}
    </div>
  </div>
);

interface TwoTitlesAndParagraphBlockProps {
  block: ITwoTitlesAndParagraphBlock;
}

export const TwoTitlesAndParagraphBlock: React.FC<
  TwoTitlesAndParagraphBlockProps
> = ({ block }) => {
  return (
    <div
      className="project-section"
      style={{ background: block.backgroundColor || "white" }} // @TODO Implement in B
    >
      <div className="project-container flex flex-col">
        {block.firstItem && (
          <Paragraph mb="mb-10" paragraph={block.firstItem} />
        )}

        {block.secondItem && <Paragraph paragraph={block.secondItem} />}
      </div>
    </div>
  );
};
