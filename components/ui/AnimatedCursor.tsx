"use client";

import { useEffect, useRef } from "react";

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    let raf: number;
    let x = -400;
    let y = -400;
    let targetX = -400;
    let targetY = -400;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-glow hidden lg:block" />;
}
