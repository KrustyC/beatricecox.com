interface ChevronUpIconProps {
  className?: string;
  onClick?: VoidFunction;
}

export const ChevronUpIcon: React.FC<
  React.PropsWithChildren<ChevronUpIconProps>
> = ({ className = "size-6", onClick }) => (
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
      d="m4.5 15.75 7.5-7.5 7.5 7.5"
    />
  </svg>
);
