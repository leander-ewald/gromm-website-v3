"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TreeRingsProps {
  className?: string;
  size?: number;
  rings?: number;
}

export function TreeRings({ className = "", size = 280, rings = 7 }: TreeRingsProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const circles = svgRef.current.querySelectorAll<SVGCircleElement>(".ring");
    if (circles.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 80%",
          end: "center 40%",
          scrub: 1.2,
        },
      });

      circles.forEach((circle, i) => {
        const r = parseFloat(circle.getAttribute("r") || "0");
        const circumference = 2 * Math.PI * r;

        gsap.set(circle, {
          strokeDasharray: circumference,
          strokeDashoffset: circumference,
        });

        tl.to(
          circle,
          { strokeDashoffset: 0, duration: 0.4, ease: "power1.out" },
          i * 0.1
        );
      });
    });

    return () => ctx.revert();
  }, [rings]);

  const center = size / 2;
  const maxRadius = center - 12;
  const spacing = maxRadius / (rings + 1);

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
    >
      {/* Center dot (heartwood) */}
      <circle cx={center} cy={center} r={4} fill="currentColor" opacity="0.25" />

      {/* Growth rings from inside out */}
      {Array.from({ length: rings }, (_, i) => {
        const r = spacing * (i + 1);
        const opacity = 0.12 + (i / rings) * 0.18;
        const strokeW = 1.2 + (i / rings) * 1;
        return (
          <circle
            key={i}
            className="ring"
            cx={center}
            cy={center}
            r={r}
            stroke="currentColor"
            strokeWidth={strokeW}
            opacity={opacity}
          />
        );
      })}
    </svg>
  );
}
