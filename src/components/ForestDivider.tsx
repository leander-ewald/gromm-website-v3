"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

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

    const layers =
      containerRef.current.querySelectorAll<SVGElement>(".fd-layer");
    if (layers.length === 0) return;

    /* Continuous wind animation — each layer sways at its own rhythm.
       Back layers move slower & larger (further away), front faster & smaller. */
    const ctx = gsap.context(() => {
      layers.forEach((layer, i) => {
        // Back layer (i=0): slow, wide sway. Front (i=2): faster, tighter.
        const xAmplitude = [6, 4, 2.5][i];
        const yAmplitude = [3, 2, 1.2][i];
        const duration = [4.5, 3.5, 2.8][i];

        // Horizontal wind sway
        gsap.to(layer, {
          x: xAmplitude,
          duration: duration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        // Vertical gentle bob (offset start so layers don't sync)
        gsap.to(layer, {
          y: yAmplitude,
          duration: duration * 1.3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: [0, 0.6, 1.2][i],
        });

        // Very subtle scale pulse for organic breathing feel
        gsap.to(layer, {
          scaleX: 1 + [0.008, 0.005, 0.003][i],
          duration: duration * 1.7,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: [0.3, 0, 0.8][i],
        });
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
      className={`relative w-full h-[80px] sm:h-[100px] lg:h-[120px] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {treePaths.map((d, i) => (
        <svg
          key={i}
          className="fd-layer absolute w-full h-full"
          /* Slightly oversized so wind sway + scale never exposes container edges */
          style={{
            zIndex: i,
            top: "-10%",
            left: "-2%",
            width: "104%",
            height: "120%",
          }}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill={colors[i]}
        >
          <path d={d} />
        </svg>
      ))}
    </div>
  );
}
