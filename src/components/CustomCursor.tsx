"use client";

import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (
        e.target instanceof Element &&
        (e.target.closest("a, button") ||
          e.target.closest("[data-cursor-hover]"))
      ) {
        setIsHoveringLink(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (
        e.target instanceof Element &&
        (e.target.closest("a, button") ||
          e.target.closest("[data-cursor-hover]"))
      ) {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const cursorSize = isHoveringLink ? 40 : 20;

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        backgroundColor: isHoveringLink
          ? "var(--accent, #ff4d4d)"
          : "transparent",
        border: isHoveringLink ? "none" : "2px solid var(--accent, #ff4d4d)",
        mixBlendMode: "difference",
        opacity: 0.8,
        backdropFilter: isHoveringLink ? "blur(2px)" : "none",
        boxShadow: isHoveringLink
          ? "0 0 12px var(--accent, #ff4d4d)"
          : "0 0 4px rgba(0,0,0,0.15)",
      }}
      className="fixed rounded-full pointer-events-none z-50 transition-all duration-200 ease-out"
    />
  );
};

export default CustomCursor;
