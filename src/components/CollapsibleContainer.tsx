"use client";

import classNames from "classnames";
import { PropsWithChildren, useState } from "react";

interface CollapsibleContainerProps {
  title: string;
  variant: "black" | "primary" | "accent" | "orange";
}

export const CollapsibleContainer: React.FC<
  PropsWithChildren<CollapsibleContainerProps>
> = ({ title, variant, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames("container-x-padding flex flex-col", {
        "bg-[#272727]": variant === "black",
        "bg-primary": variant === "primary",
        "bg-accent": variant === "accent",
        "bg-[#FFB649]": variant === "orange",
      })}
    >
      <div className="flex items-center justify-between py-10">
        <h3
          className={classNames(
            "tracking-widest uppercase font-manrope font-light",
            {
              "text-white": variant === "black",
              "text-black": variant !== "black",
            }
          )}
        >
          {title}
        </h3>

        <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? "Close" : "Open"}
        </button>
      </div>

      {isOpen && <div className="flex flex-col min-h-[530px]">{children}</div>}
    </div>
  );
};
