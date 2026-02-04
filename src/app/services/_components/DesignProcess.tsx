import classNames from "classnames";

import { ChevronRightIcon } from "@/icons/ChevronRight";

const items = [
  {
    number: "01",
    title: "Getting to know you",
    description:
      "This is where we get to know you. We discover what makes you tick, explore the relationship between you and your audience, and understand your current and future positioning. This will provide a solid base to start our project.",
  },
  {
    number: "02",
    title: "Define the direction",
    description:
      "Next, we transform our conversation into actionable information, supported by case studies and market research. We elaborate a conceptual foundation that will ensure everyone is on the same page regarding future steps.",
  },
  {
    number: "03",
    title: "The Magic",
    description:
      "We create and design something together. The various stages in this chapter will include a series of design deliveries and client feedback, allowing us to move from initial ideas to concepts tailored to fit your brand.",
  },
  {
    number: "04",
    title: "Output",
    description:
      "Once we've finalised everything and you have given your approval, it's time for the handover of the signed-off material. This includes brand manuals and asset designs, print-ready artwork for printers, and website and online launches.",
  },
  {
    number: "05",
    title: "Continue the journey",
    description:
      "Now you have all the material you need to make your brand shine — if you feel you need ongoing assistance, we can plan a support system which will make sure your brand is implemented correctly and continues to evolve.",
  },
];

export const DesignProcess: React.FC = () => {
  return (
    <div className="bg-primary flex flex-col py-20">
      <h3 className="mb-8 tracking-titles uppercase font-manrope font-semibold ml-8 lg:ml-24 3xl:ml-48 4xl:ml-64">
        Design Process
      </h3>

      <div className="w-screen flex text-black gap-24 max-w-screen overflow-y-scroll">
        {items.map((item, index) => (
          <Item
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            first={index === 0}
            last={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

interface ItemProps {
  number: string;
  title: string;
  description: string;
  first?: boolean;
  last?: boolean;
}

const Item: React.FC<ItemProps> = ({
  number,
  title,
  description,
  first,
  last,
}) => {
  return (
    <div
      className={classNames("flex justify-between", {
        "ml-8 lg:ml-24 3xl:ml-48 4xl:ml-64": first,
        "mr-8 lg:mr-24 3xl:mr-48 4xl:mr-64": last,
      })}
    >
      <div className="text-black flex flex-col">
        <span className="text-5xl font-bodoni mb-6">{number}</span>
        <h4 className="tracking-titles uppercase font-manrope font-medium mb-1">
          {title}
        </h4>
        <p className="w-[330px]">{description}</p>
      </div>

      {!last && (
        <div className="ml-4">
          <ChevronRightIcon className="h-8 w-8" />
        </div>
      )}
    </div>
  );
};
