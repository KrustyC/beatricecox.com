import { useEffect, useState } from "react";
import { config, useSpring } from "@react-spring/web";

export function useOverlayAnimation(isOverlayInitiallyVisible: boolean) {
  const [show, setShow] = useState(isOverlayInitiallyVisible ? false : true);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isOverlayInitiallyVisible) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setShow(true);
      }, 300);
    }
  }, []);

  const overlayAnimationStyle = useSpring({
    opacity: show ? 1 : 0,
    config: config.molasses,
  });

  return overlayAnimationStyle;
}
