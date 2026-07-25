"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

/**
 * Scroll-entrance primitive used across the whole site.
 *
 * The public API is intentionally tiny (children / className / scale / delay /
 * style) so every section stays readable — swap the engine here and the whole
 * site follows. Honours prefers-reduced-motion: the content still appears,
 * just without travel.
 */
export default function Reveal({
  children,
  className = "",
  scale = false,
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  scale?: boolean;
  delay?: number;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();

  const hidden = reduce
    ? { opacity: 0 }
    : scale
      ? { opacity: 0, scale: 0.94 }
      : { opacity: 0, y: 28 };

  return (
    <motion.div
      className={className}
      style={style}
      initial={hidden}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduce ? 0.25 : 0.7,
        delay: delay / 1000,
        ease: [0.2, 0.7, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
