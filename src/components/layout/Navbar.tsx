"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-transparent bg-background/70 backdrop-blur-xl">


          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* Logo / Name */}
            <a
  href="/"
  className="ml-3 group"
>
  <p
  className="
    text-[20px]
    font-semibold
    tracking-[0.01em]
    text-orange-400
    transition-all
    duration-300
    group-hover:text-orange-300
    group-hover:drop-shadow-[0_0_14px_rgba(249,115,22,0.45)]
  "
  style={{
  textShadow: `
    1px 1px 0 rgba(37,99,235,0.7),
    -1px -1px 0 rgb(255, 106, 0)
  `,
}}
>
  JOSE VINCE CAMAGAY
</p>
</a>

            {/* Navigation */}
            <nav className="hidden items-center gap-10 lg:gap-12 md:flex">

<a
  href="#home" onClick={(e) => {
    e.preventDefault();
    document.querySelector("#home")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="group relative text-sm text-foreground/70 transition hover:text-orange-400"
>
  Home
  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
</a>

              <a href="#about" onClick={(e) => {
    e.preventDefault();
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
    });
  }} 
                className="group relative text-sm text-foreground/70 transition hover:text-orange-400"
>
  About
  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
</a>

              <a
                href="#tools" onClick={(e) => {
    e.preventDefault();
    document.querySelector("#tools")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
                className="group relative text-sm text-foreground/70 transition hover:text-orange-400"
>
  Tools
  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
</a>

              <a
                href="#projects" onClick={(e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
                className="group relative text-sm text-foreground/70 transition hover:text-orange-400"
>
  Projects
  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
</a>

              <a
                href="#contact" onClick={(e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
                className="group relative text-sm text-foreground/70 transition hover:text-orange-400"
>
  Contact
  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
</a>

            </nav>

            <div className="flex items-center gap-3">

  <ThemeToggle />

  {/* Mobile Menu Button */}
  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="flex flex-col gap-1.5 md:hidden"
    aria-label="Toggle Menu"
  >
    <span className="h-0.5 w-6 bg-orange-400" />
    <span className="h-0.5 w-6 bg-orange-400" />
    <span className="h-0.5 w-6 bg-orange-400" />
  </button>

</div>

          </div>
        <div
  className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
    mobileMenuOpen
      ? "max-h-[400px] border-t border-transparent"
      : "max-h-0"
  }`}
>
  <nav className="bg-background/95 backdrop-blur-xl">
    <div className="flex flex-col px-6 py-4">

      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#home")?.scrollIntoView({
            behavior: "smooth",
          });
          setMobileMenuOpen(false);
        }}
        className="border-b border-transparent py-4 text-foreground/70 hover:text-orange-400"
      >
        Home
      </a>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({
            behavior: "smooth",
          });
          setMobileMenuOpen(false);
        }}
        className="border-b border-transparent py-4 text-foreground/70 hover:text-orange-400"
      >
        About
      </a>

      <a
        href="#tools"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#tools")?.scrollIntoView({
            behavior: "smooth",
          });
          setMobileMenuOpen(false);
        }}
        className="border-b border-transparent py-4 text-foreground/70 hover:text-orange-400"
      >
        Tools
      </a>

      <a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#projects")?.scrollIntoView({
            behavior: "smooth",
          });
          setMobileMenuOpen(false);
        }}
        className="border-b border-transparent py-4 text-foreground/70 hover:text-orange-400"
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#contact")?.scrollIntoView({
            behavior: "smooth",
          });
          setMobileMenuOpen(false);
        }}
        className="py-4 text-foreground/70 hover:text-orange-400"
      >
        Contact
      </a>

    </div>
  </nav>
</div>
      
    </header>
  );
}