import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DropdownOpenDirection } from "../types/props";


interface DropdownPortalProps {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLElement | null>;
  isOpen: boolean;
  openDirection?: DropdownOpenDirection;
}

export const DropdownPortal = ({ children, containerRef, isOpen, openDirection = "down" }: DropdownPortalProps) => {
  const [position, setPosition] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });
  const [resolvedDirection, setResolvedDirection] = useState<Exclude<DropdownOpenDirection, "auto">>("down");
  const portalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      let direction: Exclude<DropdownOpenDirection, "auto"> = openDirection === "up" ? "up" : "down";
      if (openDirection === "auto" && portalRef.current) {
        const menuHeight = portalRef.current.offsetHeight;
        const spaceBelow = window.innerHeight - rect.bottom - 8;
        const spaceAbove = rect.top - 8;
        if (menuHeight > spaceBelow && spaceAbove > spaceBelow) {
          direction = "up";
        }
      }
      setResolvedDirection(direction);
      setPosition({
        top: (direction === "up" ? rect.top : rect.bottom) + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen, containerRef, openDirection]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={portalRef}
      style={{
        position: "absolute",
        top: resolvedDirection === "up" ? position.top - 8 : position.top + 8,
        left: position.left,
        width: position.width,
        zIndex: 100000,
        transform: resolvedDirection === "up" ? "translateY(-100%)" : undefined,
      }}
      onPointerDown={e => e.stopPropagation()}
    >
      {children}
    </div>,
    document.body
  );
};
