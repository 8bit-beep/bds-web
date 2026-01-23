"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface DatePickerPortalProps {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement | null>;
  portalRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
}

export const DatePickerPortal = ({
  children,
  containerRef,
  portalRef,
  isOpen,
}: DatePickerPortalProps) => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    setPosition({
      top: rect.bottom + window.scrollY + 8,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  }, [isOpen, containerRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={portalRef}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        width: position.width,
        zIndex: 100000,
      }}
      onPointerDown={e => e.stopPropagation()}
    >
      {children}
    </div>,
    document.body
  );
};
