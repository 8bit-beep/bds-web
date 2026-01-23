"use client";

import { useEffect, useRef, RefObject } from "react";

export const useClickOutside = <T extends HTMLElement>(
  onClickOutside: () => void,
  ignoreRefs: RefObject<HTMLElement | null>[] = []
) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;

      if (!ref.current) return;

      if (ref.current.contains(target)) return;

      if (
        ignoreRefs.some(
          ignoreRef =>
            ignoreRef.current &&
            ignoreRef.current.contains(target)
        )
      ) {
        return;
      }

      onClickOutside();
    };

    document.addEventListener("mousedown", handler);
    return () =>
      document.removeEventListener("mousedown", handler);
  }, [onClickOutside, ignoreRefs]);

  return ref;
};
