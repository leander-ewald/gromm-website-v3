"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MetallicSheenProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "subtle" | "normal";
}

export function MetallicSheen({
  children,
  className = "",
  intensity = "normal",
}: MetallicSheenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sheenRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sheenRef.current,
        { x: "-100%" },
        {
          x: "200%",
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const opacity = intensity === "subtle" ? "0.08" : "0.15";

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
      <div
        ref={sheenRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,${opacity}) 45%, rgba(255,255,255,${Number(opacity) + 0.08}) 50%, rgba(255,255,255,${opacity}) 55%, transparent 60%)`,
          transform: "translateX(-100%)",
        }}
      />
    </div>
  );
}
