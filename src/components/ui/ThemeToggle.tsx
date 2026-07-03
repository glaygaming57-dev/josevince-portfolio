"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-7 w-14 rounded-full bg-white/10 border border-white/10" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative flex h-7 w-14 items-center justify-center
        rounded-full border border-black/60
        bg-white/10 dark:bg-white/5
        backdrop-blur-md
        transition-all duration-300
        hover:border-[#F97316]/60
        hover:shadow-[0_0_22px_rgba(249,115,22,0.25)]
      "
      aria-label="Toggle theme"
    >
      {/* background highlight */}
      <div
        className={`
          absolute inset-0 rounded-full transition-all duration-300
          ${isDark ? "bg-[#F97316]/10" : "bg-transparent"}
        `}
      />

      {/* ICON (SVG instead of emoji) */}
      <span
        className={`
          relative z-10 transition-all duration-300
          ${isDark ? "-translate-x-2" : "translate-x-2"}
        `}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}

/* ---------------- ICONS ---------------- */

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-orange-500"
    >
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
    </svg>
    
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-orange-500"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>

  );
}