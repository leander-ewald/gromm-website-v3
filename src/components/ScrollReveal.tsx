"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = { opacity: 1, duration, delay, ease: "power3.out" };

    switch (direction) {
      case "up":
        fromVars.y = distance;
        toVars.y = 0;
        break;
      case "left":
        fromVars.x = -distance;
        toVars.x = 0;
        break;
      case "right":
        fromVars.x = distance;
        toVars.x = 0;
        break;
      case "scale":
        fromVars.scale = 0.92;
        toVars.scale = 1;
        break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [direction, delay, duration, distance, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* Stagger-Container: animates direct children one by one */
export function StaggerReveal({
  children,
  className = "",
  stagger = 0.1,
  delay = 0,
  duration = 0.7,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const items = ref.current.children;
    if (items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [stagger, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* Counter animation for stats */
export function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const obj = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        value: end,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(obj.value).toLocaleString("de-DE")}${suffix}`;
          }
        },
      });
    });

    return () => ctx.revert();
  }, [end, prefix, suffix, duration]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
