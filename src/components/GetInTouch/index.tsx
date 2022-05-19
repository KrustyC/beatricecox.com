import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { SlideFromLeftOnMount } from "../animations/SlideFromLeftOnMount";
import { Arrow } from "./Arrow";

const Portal = dynamic(() => import("@/components/Portal"), {
  ssr: false,
});

export const GetInTouch: React.FC = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) {
      return;
    }

    const st = window.pageYOffset || document.documentElement.scrollTop;
    setLastScrollTop(st <= 0 ? 0 : st);

    if (st > lastScrollTop) {
      // downscroll code
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect || rect.top < window.innerHeight / 2 - 100) {
        // If we are in the top third of the page, stop the animation
        return;
      }

      containerRef.current.style.top = `${rect.top - 5}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Portal wrapperId="get-in-touch-portal">
      <div
        ref={containerRef}
        className={`z-50 fixed flex items-center bottom-0 h-[150px] w-[190px]`}
      >
        <SlideFromLeftOnMount appearAfterMs={1000}>
          <Arrow />
        </SlideFromLeftOnMount>
      </div>
    </Portal>
  );
};
