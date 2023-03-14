import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { animated, config, useSpring } from "@react-spring/web";
import { CirclesLogo } from "@/components/icons/CirclesLogo";

const Portal = dynamic(() => import("@/components/Portal"), {
  ssr: false,
});

interface OverlayProps {
  initiallyVisible: boolean;
  onHideOverlay: VoidFunction;
}

export const Overlay: React.FC<OverlayProps> = ({
  initiallyVisible,
  onHideOverlay: onHideOverlayCb,
}) => {
  const [showOverlay, setShowOverlay] = useState(initiallyVisible);
  const [isOverlayActuallyVisible, setIsOverlayActuallyVisible] =
    useState(initiallyVisible);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    }
  }, []);

  const overlayAnimationStyle = useSpring({
    opacity: showOverlay ? 1 : 0,
    config: config.molasses,
  });

  useEffect(() => {
    console;
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
    onHideOverlayCb();
    document.body.style.overflow = "scroll";
  };

  return (
    <Portal wrapperId="overlay-portal">
      <animated.div
        className="z-50 cursor-pointer fixed bg-[#FFB649] text-[#DF8D13] w-screen h-screen bg-white top-0 left-0 flex flex-col items-center justify-center"
        style={overlayAnimationStyle}
        onClick={onHideOverlay}
      >
        <CirclesLogo />
      </animated.div>
    </Portal>
  );
};
