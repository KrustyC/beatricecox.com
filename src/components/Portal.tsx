"use client";

import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  wrapperId: string;
}

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");

  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);

  return wrapperElement;
}

const Portal: React.FC<React.PropsWithChildren<PortalProps>> = ({
  children,
  wrapperId,
}) => {
  const [elementWrapper, setElementWrapper] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setElementWrapper(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!elementWrapper) {
    return null;
  }

  return createPortal(children, elementWrapper);
};

export default Portal;
