"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import type { ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const viewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -80px 0px",
};

export function MotionOnLoad({ children, className, delay = 0 }: MotionProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function MotionSection({ children, className, delay = 0 }: MotionProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        transition={{ duration: 0.55, ease: "easeOut", delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function MotionCard({ children, className, delay = 0 }: MotionProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        transition={{ duration: 0.45, ease: "easeOut", delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
