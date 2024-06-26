import { PropsWithChildren } from "react";
import classNames from "classnames";

interface TitleAndCopyProps {
  title: string;
  variant: "dark" | "light";
}

export const TitleAndCopy: React.FC<PropsWithChildren<TitleAndCopyProps>> = ({
  title,
  variant,
  children,
}) => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <h4
        className={classNames(
          "text-regular tracking-[.3rem] font-light font-manrope uppercase",
          {
            "text-white": variant === "light",
            "text-black": variant === "dark",
          }
        )}
      >
        {title}
      </h4>
      <div>{children}</div>
    </div>
  );
};
