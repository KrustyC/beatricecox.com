import React, { ReactElement, useState } from "react";
export * from "./Tab";

interface TabsProps {
  defaultLabel: string;
}

export const Tabs: React.FC<React.PropsWithChildren<TabsProps>> = ({
  children,
  defaultLabel,
}) => {
  const [currentTab, setCurrentTab] = useState(defaultLabel);

  const onSelectTab = (label: string) => setCurrentTab(label);

  const labels =
    React.Children.map(
      children,
      (child) => (child as ReactElement).props.label
    ) || [];

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {labels.map((label, i) => (
            <li key={i} className="mr-2">
              <div
                className={`cursor-pointer inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 ${
                  label === currentTab
                    ? "border-blue-600 active"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
                onClick={() => onSelectTab(label)}
              >
                {label}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content">
        {React.Children.map(children, (child) => {
          if ((child as ReactElement).props.label !== currentTab) {
            return undefined;
          }

          return (child as ReactElement).props.children;
        })}
      </div>
    </div>
  );
};
