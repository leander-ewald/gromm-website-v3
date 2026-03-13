"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const leafShapes = [
  // Oak leaf (rounded lobes)
  "M12 2C9 5 5 7 4 11c-.5 3 1 5 3 6.5C8.5 18.5 10 19 12 19s3.5-.5 5-1.5c2-1.5 3.5-3.5 3-6.5C19 7 15 5 12 2z",
  // Beech leaf (simple oval)
  "M12 2C8 5 6 9 6 13c0 3 2 5 4 6 1 .5 1.5.7 2 .7s1-.2 2-.7c2-1 4-3 4-6 0-4-2-8-6-11z",
  // Birch leaf (pointed)
  "M12 3L7 10c-2 2.5-3 5-2.5 7.5.5 2 2 3.5 4 4.5 1 .5 2.5.8 3.5.8s2.5-.3 3.5-.8c2-1 3.5-2.5 4-4.5.5-2.5-.5-5-2.5-7.5L12 3z",
];

interface FloatingLeavesProps {
  count?: number;
  variant?: "dark" | "light";
  className?: string;
}

export function FloatingLeaves({
  count = 5,
  variant = "dark",
  className = "",
}: FloatingLeavesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const leaves = containerRef.current.querySelectorAll<SVGElement>(".fl-leaf");
    if (leaves.length === 0) return;

    const ctx = gsap.context(() => {
      leaves.forEach((leaf, i) => {
        const scrubSpeed = 0.8 + ((i * 0.618) % 1.5);
        const rotateEnd = (i % 2 === 0 ? 1 : -1) * (90 + ((i * 47) % 180));
        const xDrift = (i % 2 === 0 ? 1 : -1) * (20 + ((i * 31) % 60));

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: scrubSpeed,
          },
        });

        tl.fromTo(
          leaf,
          { y: -30, x: 0, rotation: 0, opacity: 0 },
          {
            y: 40,
            x: xDrift * 0.3,
            rotation: rotateEnd * 0.3,
            opacity: 0.7,
            duration: 0.35,
            ease: "none",
          }
        ).to(leaf, {
          y: 180 + ((i * 37) % 80),
          x: xDrift,
          rotation: rotateEnd,
          opacity: 0,
          duration: 0.65,
          ease: "none",
        });
      });
    });

    return () => ctx.revert();
  }, [count]);

  const color = variant === "dark" ? "#4a9e74" : "#a4d4b8";

  const leaves = Array.from({ length: count }, (_, i) => ({
    left: `${((i * 137.508) % 90) + 5}%`,
    top: `${((i * 61.803) % 50) + 10}%`,
    size: 18 + ((i * 7) % 14),
    shape: leafShapes[i % leafShapes.length],
  }));

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {leaves.map((leaf, i) => (
        <svg
          key={i}
          className="fl-leaf absolute"
          style={{ left: leaf.left, top: leaf.top, width: leaf.size, height: leaf.size }}
          viewBox="0 0 24 24"
          fill={color}
          opacity="0"
        >
          <path d={leaf.shape} />
        </svg>
      ))}
    </div>
  );
}
