interface PriceIconProps {
  height?: string;
  width?: string;
}

export const PriceIcon: React.FC<PriceIconProps> = ({
  height = "h-6",
  width = "w-6",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${height} ${width}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
