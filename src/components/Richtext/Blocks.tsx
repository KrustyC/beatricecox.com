import { Children, PropsWithChildren } from "react";

export const Bold: React.FC<PropsWithChildren> = ({ children }) => (
  <span className="font-bold">{children}</span>
);

export const Text: React.FC<PropsWithChildren> = ({ children }) => {
  const childrenArray = Children.toArray(children);

  if (childrenArray.length === 1 && childrenArray[0] === "") {
    return null;
  }

  return <p className="rich-text-copy mb-2">{children}</p>;
};

export const UnorderedList: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="rich-text-copy">
    <ul className="list-disc ml-6 pl-3">{children}</ul>
  </div>
);

export const OrderedList: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="rich-text-copy">
    <ol className="list-decimal ml-6 pl-3">{children}</ol>
  </div>
);

export const ListItem: React.FC<PropsWithChildren> = ({ children }) => (
  <li className="mb-2 text-lg">{children}</li>
);

interface HeadingProps {
  size: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading: React.FC<PropsWithChildren<HeadingProps>> = ({
  children,
  size,
}) => {
  switch (size) {
    case 1:
      return <h1 className="rich-text-heading text-5xl">{children}</h1>;
    case 2:
      return (
        <h2 className="rich-text-heading !font-semibold text-2xl lg:text-4xl mt-8 lg:mt-12">
          {children}
        </h2>
      );
    case 3:
      return <h3 className="rich-text-heading text-3xl">{children}</h3>;
    case 4:
      return <h4 className="rich-text-heading text-2xl">{children}</h4>;
    case 5:
      return <h5 className="rich-text-heading text-xl">{children}</h5>;
    case 6:
    default:
      return <h6 className="rich-text-heading text-lg">{children}</h6>;
  }
};
