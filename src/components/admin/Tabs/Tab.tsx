interface TabProps {
  label: string;
}

export const Tab: React.FC<React.PropsWithChildren<TabProps>> = ({
  children,
}) => {
  return <div>{children}</div>;
};
