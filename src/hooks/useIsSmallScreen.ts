import { useEffect, useState } from "react";

export const useIsSmallScreen = ({ defaultValue = true }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(defaultValue);

  const checkIfMobile = () => {
    setIsSmallScreen(window.innerWidth < 1180);
  };

  useEffect(() => {
    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return isSmallScreen;
};