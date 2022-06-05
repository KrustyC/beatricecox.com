import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { animated, config, useSpring } from "@react-spring/web";
import { BeatriceCoxLogoIconOrange } from "@/components/icons/BeatriceCoxLogo";

const Portal = dynamic(() => import("@/components/Portal"), {
  ssr: false,
});

export const Overlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isOverlayActuallyVisible, setIsOverlayActuallyVisible] =
    useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  }, []);

  const overlayAnimationStyle = useSpring({
    opacity: showOverlay ? 1 : 0,
    // from: { opacity: 1 },
    // // enter: { opacity: 1 },
    // leave: { opacity: 0 },

    config: config.molasses,
  });

  useEffect(() => {
    setTimeout(() => {
      if (!showOverlay) {
        setIsOverlayActuallyVisible(false);
      }
    }, 900);
  }, [showOverlay]);

  if (!isOverlayActuallyVisible) {
    return null;
  }

  const onHideOverlay = () => {
    setShowOverlay(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <Portal wrapperId="overlay-portal">
      <animated.div
        className="z-50 cursor-pointer fixed bg-[#FFB649] text-[#DF8D13] w-screen h-screen bg-white top-0 left-0 flex flex-col items-center justify-center"
        style={overlayAnimationStyle}
        onClick={onHideOverlay}
      >
        <BeatriceCoxLogoIconOrange />
        <h6 className="mt-8">Website under construction.</h6>
        <b>STAY TUNED!</b>
      </animated.div>
    </Portal>
  );
};
