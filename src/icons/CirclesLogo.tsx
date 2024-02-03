interface CirclesLogoProps {
  width?: string;
  height?: string;
}

export const CirclesLogo: React.FC<CirclesLogoProps> = ({
  width = "306",
  height = "305",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 306 305"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1052_39)">
      <path
        d="M229.333 0C187.007 0 152.667 34.1281 152.667 76.2573H229.333V0Z"
        fill="white"
      />
      <path
        d="M152.667 76.2573C152.667 118.357 186.978 152.515 229.333 152.515V76.2573H152.667Z"
        fill="white"
      />
      <path
        d="M229.333 152.515C187.007 152.515 152.667 186.643 152.667 228.772H229.333V152.515Z"
        fill="#EBA030"
      />
      <path
        d="M152.667 228.772C152.667 270.872 186.978 305.029 229.333 305.029V228.772H152.667Z"
        fill="#EBA030"
      />
      <path
        d="M229.333 305C271.66 305 306 270.872 306 228.743H229.333V305Z"
        fill="white"
      />
      <path
        d="M229.333 152.515V228.772H306C306 186.672 271.689 152.515 229.333 152.515Z"
        fill="white"
      />
      <path
        d="M76 305C118.326 305 152.667 270.872 152.667 228.743H76V305Z"
        fill="#EBA030"
      />
      <path
        d="M76 152.515V228.772H152.667C152.667 186.672 118.355 152.515 76 152.515Z"
        fill="#EBA030"
      />
      <path
        d="M76 152.515C118.326 152.515 152.667 118.386 152.667 76.2573H76V152.515Z"
        fill="#EBA030"
      />
      <path
        d="M76 0V76.2573H152.667C152.667 34.1281 118.326 0 76 0Z"
        fill="#EBA030"
      />
      <path
        d="M229.333 152.656C271.66 152.656 306 118.528 306 76.3992H229.333V152.656Z"
        fill="#EBA030"
      />
      <path
        d="M229.333 0V76.2573H306C306 34.1572 271.689 0 229.333 0Z"
        fill="#EBA030"
      />
    </g>
    <path
      d="M76 7.62939e-06C34.042 3.96131e-06 -3.95877e-06 34.013 -7.62939e-06 76L76 76L76 7.62939e-06Z"
      fill="#EBA030"
    />
    <path
      d="M76 152L76 76L-9.85264e-07 76C-4.65335e-06 117.958 34.013 152 76 152Z"
      fill="#EBA030"
    />
    <path
      d="M76 152C34.042 152 -3.91047e-06 186.461 -7.62939e-06 229L76 229L76 152Z"
      fill="#EBA030"
    />
    <path
      d="M76 305L76 229L-9.85264e-07 229C-4.65589e-06 270.987 34.042 305 76 305Z"
      fill="#EBA030"
    />
    <defs>
      <clipPath id="clip0_1052_39">
        <rect width="230" height="305" fill="white" transform="translate(76)" />
      </clipPath>
    </defs>
  </svg>
);
