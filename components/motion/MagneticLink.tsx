"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** How far (px) the element is allowed to travel toward the pointer. */
  strength?: number;
  target?: string;
  rel?: string;
};

/**
 * A link that pulls toward the cursor on hover and springs back on leave.
 * Disabled on touch devices and for prefers-reduced-motion users, where it
 * behaves like a plain Link.
 */
export default function MagneticLink({ href, children, className, strength = 0.35, target, rel }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 });

  function handleMouseMove(e: ReactMouseEvent<HTMLDivElement>) {
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link ref={ref} href={href} className={className} target={target} rel={rel}>
        {children}
      </Link>
    </motion.div>
  );
}
