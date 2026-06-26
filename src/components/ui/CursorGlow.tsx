"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [t, setT] = useState(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    const interval = setInterval(() => {
      setPos((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.08,
        y: prev.y + (mouse.y - prev.y) * 0.08,
      }));

      setT((p) => p + 1);
    }, 16); // ~60fps

    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(interval);
    };
  }, [mouse]);

  // firefly pulse
  const pulse = Math.sin(t * 0.15) * 0.5 + 0.5;

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        zIndex: 99999,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: 60 + pulse * 60,
          height: 60 + pulse * 60,

          borderRadius: "9999px",

          background: `radial-gradient(
            circle,
            rgba(255,140,0,${0.1 + pulse * 0.15}) 0%,
            transparent 70%
          )`,

          filter: "blur(12px)",
        }}
      />
    </div>
  );
}
