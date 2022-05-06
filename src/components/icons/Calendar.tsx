interface CalendarIconProps {
  height?: string;
  width?: string;
}

export const CalendarIcon: React.FC<
  React.PropsWithChildren<CalendarIconProps>
> = ({ height = "h-6", width = "w-6" }) => (
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
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);
