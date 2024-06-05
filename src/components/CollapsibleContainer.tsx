"use client";

import { PropsWithChildren, useRef, useState } from "react";
import classNames from "classnames";

import { ChevronDownIcon } from "@/icons/ChevronDown";

interface CollapsibleContainerProps {
  title: string;
  variant: "black" | "primary" | "accent" | "orange";
}

export const CollapsibleContainer: React.FC<
  PropsWithChildren<CollapsibleContainerProps>
> = ({ title, variant, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

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
          <ChevronDownIcon
            className={classNames("w-6 h-6 transition-all duration-500", {
              "text-white": variant === "black",
              "text-black": variant !== "black",
              "rotate-180": isOpen,
            })}
          />
        </button>
      </div>

      <div
        className={"transition-all duration-500"}
        style={{
          height: isOpen ? containerRef.current?.offsetHeight : 0,
        }}
      >
        <div className="pb-20 pt-8" ref={containerRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
