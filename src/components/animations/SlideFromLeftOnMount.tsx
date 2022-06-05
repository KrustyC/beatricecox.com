import { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";

interface SlideFromLeftOnMountProps {
  appearAfterMs?: number;
}

export const SlideFromLeftOnMount: React.FC<
  React.PropsWithChildren<SlideFromLeftOnMountProps>
> = ({ appearAfterMs = 1500, children }) => {
  const [show, setShow] = useState(false);
  const transition = useTransition(show, {
    from: { x: -150, opacity: 0 },
    enter: { x: 0, opacity: 1 },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, appearAfterMs);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {transition((style, item) =>
        item ? <animated.div style={style}>{children}</animated.div> : null
      )}
    </>
  );
};
