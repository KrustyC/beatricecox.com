interface FacebookIconProps {
  className?: string;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({
  className = "h-6 w-6",
}) => (
  <svg
    className={className}
    viewBox="0 0 11 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.81434 10.5949V20.544C2.81434 20.6131 2.84178 20.6794 2.89064 20.7282C2.9395 20.7771 3.00577 20.8046 3.07486 20.8046H6.77117C6.83932 20.8031 6.90422 20.7751 6.95191 20.7264C6.99961 20.6776 7.0263 20.6122 7.02629 20.544V10.4212H9.7076C9.77253 10.4214 9.83505 10.3968 9.88245 10.3524C9.92985 10.308 9.95855 10.2472 9.96269 10.1824L10.2232 7.13746C10.2263 7.10146 10.2217 7.06523 10.21 7.03107C10.1983 6.99691 10.1795 6.96557 10.155 6.93902C10.1305 6.91248 10.1008 6.89133 10.0677 6.8769C10.0346 6.86247 9.99881 6.85508 9.96269 6.85521H7.02629V4.68411C7.02629 4.56365 7.05002 4.44437 7.09612 4.33308C7.14222 4.22179 7.20978 4.12066 7.29496 4.03548C7.38014 3.95031 7.48126 3.88274 7.59255 3.83664C7.70384 3.79054 7.82312 3.76681 7.94358 3.76681H10.0116C10.0455 3.76682 10.0791 3.76004 10.1104 3.74689C10.1418 3.73373 10.1701 3.71445 10.1939 3.69019C10.2177 3.66592 10.2363 3.63716 10.2488 3.60558C10.2613 3.574 10.2674 3.54024 10.2666 3.50628V0.46131C10.2674 0.427355 10.2613 0.393595 10.2488 0.362015C10.2363 0.330435 10.2177 0.301672 10.1939 0.277405C10.1701 0.253139 10.1418 0.233856 10.1104 0.220698C10.0791 0.20754 10.0455 0.200772 10.0116 0.200779H6.52151C6.03468 0.200779 5.55259 0.296665 5.10282 0.482967C4.65305 0.66927 4.2444 0.942338 3.90016 1.28658C3.55592 1.63082 3.28283 2.03949 3.09653 2.48927C2.91023 2.93904 2.81434 3.4211 2.81434 3.90793V6.84435H0.98519C0.916093 6.84435 0.849822 6.8718 0.800963 6.92066C0.752104 6.96952 0.724668 7.03579 0.724668 7.10489V10.1499C0.723928 10.1843 0.730158 10.2185 0.742988 10.2504C0.755819 10.2824 0.774965 10.3114 0.799307 10.3357C0.823648 10.3601 0.852668 10.3792 0.884612 10.3921C0.916556 10.4049 0.950774 10.4111 0.98519 10.4104H2.83064L2.81434 10.5949Z"
    />
  </svg>
);