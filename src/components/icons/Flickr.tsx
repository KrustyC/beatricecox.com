interface FlickrIconProps {
  className?: string;
}

export const FlickrIcon: React.FC<React.PropsWithChildren<FlickrIconProps>> = ({
  className = "h-6 w-6",
}) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.9835 0.134399C10.7365 0.134399 0 10.8489 0 24.0655C0 37.282 10.7365 48 23.9835 48C37.2306 48 47.967 37.2855 47.967 24.0655C47.967 10.8455 37.2271 0.134399 23.9835 0.134399ZM15.8405 30.6031C12.4424 30.5859 9.29297 27.7427 9.35168 24.0551C9.36204 20.4055 12.2974 17.4796 15.9787 17.5347C19.577 17.5899 22.4571 20.4331 22.4433 24.0793C22.4295 28.0391 19.1419 30.6203 15.8405 30.6031ZM32.0091 30.6307C28.4004 30.6307 25.4719 27.7082 25.465 24.093C25.4581 20.4331 28.3796 17.5037 32.0333 17.5037C35.6938 17.5037 38.6188 20.4262 38.6154 24.0827C38.6119 27.7358 35.6904 30.6307 32.0091 30.6307Z"
      fill="currentColor"
    />
  </svg>
);
