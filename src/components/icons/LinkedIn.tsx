interface LinkedInIconProps {
  className?: string;
  onClick?: VoidFunction;
}

export const LinkedInIcon: React.FC<
  React.PropsWithChildren<LinkedInIconProps>
> = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 49 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.739746 23.9185C0.928288 10.4583 11.7243 -0.161328 25.0506 0.00185563C38.3642 0.165039 48.9304 11.0635 48.7371 24.4286C48.547 37.5308 37.6512 48.1536 24.5784 47.9983C11.4565 47.8446 0.801537 37.3502 0.739746 23.9169V23.9185ZM38.0774 37.3217C38.0996 37.0983 38.1249 36.9684 38.1249 36.8385C38.1265 32.9316 38.1582 29.0247 38.1012 25.1178C38.0885 24.2702 37.8936 23.3687 37.5498 22.594C35.8878 18.844 30.2014 17.5908 26.787 20.1827C26.3355 20.5249 25.9346 20.9368 25.3849 21.4296V19.2004H20.0376V37.3676C21.5681 37.3676 23.0653 37.336 24.561 37.3819C25.2233 37.4025 25.4102 37.195 25.4023 36.5375C25.369 33.6081 25.3785 30.6771 25.3944 27.7478C25.4039 25.7975 26.7015 24.2544 28.5457 23.9438C30.8589 23.5541 32.6841 25.1368 32.7174 27.6369C32.7554 30.5662 32.7269 33.4972 32.7301 36.4266C32.7301 36.7086 32.7538 36.9906 32.7681 37.3185H38.0806L38.0774 37.3217ZM11.4565 19.1957V37.309H16.7896V19.1957H11.4565ZM14.0961 9.95445C12.2757 9.94969 10.8497 11.3851 10.8481 13.2229C10.8465 15.0749 12.2566 16.5293 14.0613 16.5372C15.9023 16.5451 17.379 15.0622 17.3663 13.2181C17.3536 11.3977 15.9134 9.9592 14.0945 9.95445H14.0961Z"
      fill="#C89191"
    />
  </svg>
);
