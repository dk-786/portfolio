"use client";
import React, { useEffect, useState } from "react";

export default function ArrowHandler() {
  const [dotPos, setDotPos] = useState({ x: -100, y: -100, visible: false });
  const [circlePos, setCirclePos] = useState({ x: -100, y: -100 });
  const [isPointerTarget, setIsPointerTarget] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  // Detect viewport width and set showCursor accordingly
  useEffect(() => {
    const checkWidth = () => {
      if (typeof window !== "undefined") {
        setShowCursor(window.innerWidth >= 1024);
      }
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    if (!showCursor) return;

    const onMove = (e: PointerEvent | TouchEvent) => {
      const x =
        "clientX" in e
          ? e.clientX
          : (e.touches && e.touches[0].clientX) ?? 0;
      const y =
        "clientY" in e
          ? e.clientY
          : (e.touches && e.touches[0].clientY) ?? 0;

      let el: HTMLElement | null = e.target as HTMLElement;
      let pointerTarget = false;
      while (el) {
        if (el.classList?.contains("cursor-pointer")) {
          pointerTarget = true;
          break;
        }
        el = el.parentElement;
      }

      setDotPos({ x, y, visible: !pointerTarget });
      setIsPointerTarget(pointerTarget);
    };

    const onLeave = () => {
      setDotPos((p) => ({ ...p, visible: false }));
      setIsPointerTarget(false);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, [showCursor]);

  useEffect(() => {
    if (!showCursor) return;
    const animateCircle = () => {
      setCirclePos((prev) => {
        const dx = dotPos.x - prev.x;
        const dy = dotPos.y - prev.y;
        const factor = 0.15;
        return {
          x: prev.x + dx * factor,
          y: prev.y + dy * factor,
        };
      });
    };

    if (!isPointerTarget) {
      const interval = setInterval(animateCircle, 7);
      return () => clearInterval(interval);
    }
  }, [dotPos, isPointerTarget, showCursor]);

  if (!showCursor) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {!isPointerTarget && (
        <div
          aria-hidden
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-75 ease-out ${
            dotPos.visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ left: circlePos.x, top: circlePos.y }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-[#ffbd4a]/50 relative" />
        </div>
      )}

      {!isPointerTarget && (
        <div
          aria-hidden
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-75 ease-out ${
            dotPos.visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ left: dotPos.x, top: dotPos.y }}
        >
          <div className="w-[6px] h-[6px] rounded-full bg-[#ffbd4a]" />
        </div>
      )}

      {isPointerTarget && (
        <div
          aria-hidden
          className="absolute w-18 h-18 rounded-full bg-[#ffbd4a]/50 transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: dotPos.x, top: dotPos.y }}
        />
      )}
    </div>
  );
}
