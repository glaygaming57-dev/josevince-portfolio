"use client";

import { useEffect, useState } from "react";
import { MotionCard, MotionSection } from "@/components/motion/MotionElements";
import Image from "next/image";

export default function About() {
  const images = [
    "/images/gradpic.JPG",
    "/images/about.JPG",
    "/images/engineer.jpg",
  ];

  const [index, setIndex] = useState(0);
const [transition, setTransition] = useState(true);
const [isPaused, setIsPaused] = useState(false);

  // ⏱ autoplay
  useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setIndex((prev) => prev + 1);
  }, 3000);

  return () => clearInterval(interval);
}, [isPaused]);

useEffect(() => {
  if (index === images.length) {
    const timeout = setTimeout(() => {
      setTransition(false);
      setIndex(0);
    }, 700);

    return () => clearTimeout(timeout);
  }

  if (!transition) {
    requestAnimationFrame(() => {
      setTransition(true);
    });
  }
}, [index, transition, images.length]);

  return (
    <section id="about" className="text-foreground scroll-mt-0">

      <MotionSection className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 py-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-32">

        {/* LEFT */}
        <div className="lg:-translate-y-8">
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            About Me
          </h2>

          <MotionCard
  className="mt-10 space-y-6 rounded-3xl border border-border bg-card p-7 text-lg leading-9 text-foreground/70 shadow-[0_0_40px_rgba(249,115,22,0.05)]
  backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#F97316]/50 hover:shadow-[0_0_60px_rgba(249,115,22,0.18)] sm:p-8"
>
<div className="mb-4 flex items-center text-4xl font-bold tracking-tight sm:text-3.5xl">
  <span className="text-foreground">
    Hi, I'm&nbsp;
  </span>

  <span className="shine-text">
    Vince
  </span>
</div>

  <p>
    Licensed Civil Engineer with knowledge in construction estimation,
    quantity take-offs, and project coordination. Skilled in preparing
    accurate measurements using digital take-off tools to support
    estimators and builders on construction projects.
  </p>

  <p>
    With a strong foundation in construction estimating, quantity
    takeoffs, and project coordination, I am prepared to contribute to
    construction projects with accuracy and attention to detail. I value
    continuous learning, effective communication, and delivering reliable
    work that supports successful project outcomes.
  </p>

</MotionCard>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">

          <MotionCard
            delay={0.1}
            className="w-full max-w-sm rounded-3xl border border-border bg-card p-4 shadow-xl 
            backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#F97316]/50"
          >

            {/* SLIDESHOW */}
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >

              {/* TRACK (INFINITE LOOP STYLE) */}
              <div
  className={`flex h-full w-full ${
    transition
      ? "transition-transform duration-700 ease-in-out"
      : ""
  }`}
  style={{
    transform: `translateX(-${index * 100}%)`,
  }}
>

                {[...images, images[0]].map((src, i) => (
                  <div key={i} className="relative h-full w-full flex-shrink-0">
                    <Image
                      src={src}
                      alt="About slideshow"
                      fill
                      sizes="(max-width:1024px) 100vw, 420px"
                      className="object-cover"
                      priority
                    />
                  </div>
                ))}

              </div>

              {/* DOTS INDICATOR */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      i === (index === images.length ? 0 : index)
                        ? "bg-[#F97316] scale-125"
                        : "bg-white/40"
                    }`}
                  />
                ))}
              </div>

            </div>

          </MotionCard>

        </div>

      </MotionSection>

    </section>
  );
}