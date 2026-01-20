import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";


interface DropdownPortalProps {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLElement | null>;
  isOpen: boolean;
}

export const DropdownPortal = ({ children, containerRef, isOpen }: DropdownPortalProps) => {
  const [position, setPosition] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen, containerRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={portalRef}
      style={{
        position: "absolute",
        top: position.top + 8,
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
