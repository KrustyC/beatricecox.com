import { createContext, useContext } from "react";

type HomePageOverlayContextType = {
  isVisible: boolean;
  hide: VoidFunction;
};

export const HomePageOverlayContext = createContext<HomePageOverlayContextType>(
  {
    isVisible: true,
    hide: () => {
      return;
    },
  }
);

export const useHomePageOverlay = () => {
  const context = useContext(HomePageOverlayContext);

  if (!context) {
    throw new Error(
      "useHomePageOverlay must be used within an HomePageOverlayContextProvider"
    );
  }

  return context;
};
