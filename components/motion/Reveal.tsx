"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds, useful for staggering siblings. */
  delay?: number;
  /** Pixels the element travels while fading in. */
  distance?: number;
  /** Wrapper element/tag — defaults to "div". */
  as?: "div" | "article" | "li" | "section";
};

/**
 * Fades + slides content into view the first time it enters the viewport.
 * Renders statically (no animation) for prefers-reduced-motion users.
 */
export default function Reveal({ children, className, delay = 0, distance = 24, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
