"use client";

import { MotionConfig } from "motion/react";

/**
 * Wraps the app so every `motion.*` element automatically honors the user's
 * OS-level "reduce motion" setting — no per-component checks needed.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
