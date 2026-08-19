"use client";

import { motion } from "motion/react";
import { createElement } from "react";

/**
 * Splits `text` into words and staggers them in on scroll-into-view.
 * Renders as `as` (default "span") so it can sit inline inside existing headings.
 */
export default function AnimatedText({
  text,
  className,
  as = "span",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2";
  delay?: number;
}) {
  const words = text.split(" ");

  return createElement(
    motion[as as "span"],
    {
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-10% 0px" },
      variants: {
        visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
        hidden: {},
      },
    },
    words.map((word, i) => (
      <motion.span
        key={i}
        className="inline-block"
        variants={{
          hidden: { opacity: 0, y: "0.5em" },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
        }}
      >
        {word}
        {i < words.length - 1 ? " " : ""}
      </motion.span>
    )),
  );
}
