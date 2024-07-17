import classNames from "classnames";

import { TitleAndCopy } from "@/components/TitleAndCopy";
import { ChevronRightIcon } from "@/icons/ChevronRight";

const items = [
  {
    number: "01",
    title: "Discovery",
    description:
      "It's about understanding your goals and needs, by analysing your current brand, market position, target customer experience and, above all, the message you want to convey.",
  },
  {
    number: "02",
    title: "Concept Dev",
    description:
      "Based on our discussion, we create a solid base by defining the key conceptual elements to use for our brand strategy.",
  },
  {
    number: "03",
    title: "Design & Revision",
    description:
      "Now for the really fun bit! Starting with initial rough concepts we then collaborate with you through additional rounds of feedback to close in on a final result. Once you are happy with the outcome we can begin final production.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "When you're happy and everything is tested we will package and deliver the finished product. This means putting websites live, sending designs to the printers, and handing over new brand guides.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Once we've opened the door to your new brand your journey has just begun! If needed we can continue to support you to ensure your brand is applied correctly and is continuously developed.",
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
