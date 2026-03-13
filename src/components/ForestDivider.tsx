"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Three hand-crafted tree-canopy silhouette paths (viewBox 0 0 1200 120).
   Each layer has peaks at different heights — back layer tallest, front shortest. */
const treePaths = [
  // Layer 1 (back) — tall broad crowns
  "M0 65Q30 28 60 42Q90 12 120 38Q150 22 180 45Q210 8 240 32Q270 18 300 48Q330 25 360 40Q390 10 420 35Q450 20 480 50Q510 15 540 38Q570 5 600 30Q630 22 660 48Q690 12 720 35Q750 25 780 52Q810 8 840 32Q870 20 900 45Q930 15 960 38Q990 28 1020 50Q1050 12 1080 35Q1110 22 1140 48Q1170 30 1200 58L1200 120 0 120Z",
  // Layer 2 (mid) — medium crowns
  "M0 72Q40 42 80 55Q120 32 160 52Q200 38 240 58Q280 28 320 50Q360 40 400 62Q440 32 480 55Q520 42 560 60Q600 30 640 52Q680 40 720 62Q760 35 800 55Q840 45 880 65Q920 35 960 55Q1000 42 1040 60Q1080 38 1120 58Q1160 48 1200 68L1200 120 0 120Z",
  // Layer 3 (front) — shorter, more visible
  "M0 78Q35 55 70 65Q105 48 140 62Q175 52 210 66Q245 45 280 60Q315 52 350 68Q385 48 420 62Q455 55 490 70Q525 46 560 62Q595 54 630 68Q665 48 700 64Q735 55 770 70Q805 48 840 64Q875 56 910 72Q945 50 980 65Q1015 55 1050 70Q1085 50 1120 66Q1155 58 1200 75L1200 120 0 120Z",
];

interface ForestDividerProps {
  variant?: "bold" | "subtle";
  className?: string;
}

export function ForestDivider({
  variant = "bold",
  className = "",
}: ForestDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const layers =
      containerRef.current.querySelectorAll<SVGElement>(".fd-layer");
    if (layers.length === 0) return;

    /* Reduce parallax on mobile for a smoother experience */
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 768;

    const ctx = gsap.context(() => {
      layers.forEach((layer, i) => {
        const scrub = [2.5, 1.8, 1][i] ?? 1;
        const yRange = isMobile ? [4, 3, 1.5][i] : [14, 8, 3][i];

        gsap.fromTo(
          layer,
          { y: -(yRange ?? 5) },
          {
            y: yRange ?? 5,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const colors =
    variant === "bold"
      ? ["#163a27", "#0d2418", "#0a1a12"] // forest-800, 900, 950
      : ["#72b894", "#4a9e74", "#358560"]; // forest-300, 400, 500

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[80px] sm:h-[100px] lg:h-[120px] ${className}`}
      aria-hidden="true"
    >
      {treePaths.map((d, i) => (
        <svg
          key={i}
          className="fd-layer absolute inset-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill={colors[i]}
          style={{ zIndex: i }}
        >
          <path d={d} />
        </svg>
      ))}
    </div>
  );
}
