interface BarsIconProps {
  className?: string;
  onClick?: VoidFunction;
}

export const BarsIcon: React.FC<React.PropsWithChildren<BarsIconProps>> = ({
  className = "",
  onClick,
}) => (
  <svg
    className={className}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path d="M0 1H15" stroke="currentColor" />
    <path d="M0 7H15" stroke="currentColor" />
    <path d="M0 13H15" stroke="currentColor" />
  </svg>
);
