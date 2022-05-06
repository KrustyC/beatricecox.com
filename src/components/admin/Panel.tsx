interface PanelProps {
  className?: string;
}

export const Panel: React.FC<React.PropsWithChildren<PanelProps>> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`p-4 bg-white shadow-md rounded-lg ${className}`}>
      {children}
    </div>
  );
};
