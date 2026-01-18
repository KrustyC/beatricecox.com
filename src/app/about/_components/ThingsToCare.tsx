import { TitleAndCopy } from "@/components/TitleAndCopy";

const items = [
  {
    title: "Design Impact",
    description:
      "Design has a lot to answer for. As a designer, I feel a constant responsibility for the impact of my work—so I do what I can to support smaller businesses and stay focused on sustainable outcomes.",
  },
  {
    title: "Community",
    description:
      "I try to stay connected with professionals and creatives in my field, as well as with causes I care about. I’ve collaborated with Humanitarian Designers and Let’s Talk Palestine, and volunteered for the Migration Museum in London and Bandstand Beds, a local community garden.",
  },
  {
    title: "Experimenting",
    description:
      "As a multidisciplinary, I love trying new things. Pottery and hiking offer a meditative structure—slow and intentional. Tennis and board games are competitive and unpredictable. These activities reflect what I enjoy the most: being focused and playful.",
  },
  {
    title: "Travel",
    description:
      "I travel often and try to move via land whenever possible. Like design, I see travel as being more about the journey than the destination. Along the way, I’ve started a photography and travel blog side hustle with my travel companion.",
  },
];

export const ThingsToCare: React.FC = () => {
  return (
    <div className="text-white container-x-padding flex flex-col py-20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="tracking-titles uppercase font-manrope font-semibold">
          Things I care about
        </h3>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-black gap-12 xl:gap-24 3xl:gap-36">
        {items.map((item, index) => (
          <TitleAndCopy key={index} title={item.title} variant="dark">
            <p className="text-regular">{item.description}</p>
          </TitleAndCopy>
        ))}
      </div>
    </div>
  );
};
