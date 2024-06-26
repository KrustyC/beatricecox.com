interface XMarkIconProps {
  className?: string;
  onClick?: VoidFunction;
}

export const XMarkIcon: React.FC<React.PropsWithChildren<XMarkIconProps>> = ({
  className = "",
  onClick,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);
