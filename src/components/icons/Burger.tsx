interface BurgerIconProps {
  className?: string;
  onClick?: VoidFunction;
}

export const BurgerIcon: React.FC<React.PropsWithChildren<BurgerIconProps>> = ({
  className = "h-6 w-6",
  onClick = () => null,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
