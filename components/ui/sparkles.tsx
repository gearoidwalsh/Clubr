"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SparklesCoreProps = {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  speed?: number;
};

export function SparklesCore({
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.2,
  particleDensity = 60,
  particleColor = "#FDB515",
  speed = 0.4,
}: SparklesCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number };
    let particles: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      const area = rect.width * rect.height;
      const count = Math.min(220, Math.max(24, Math.floor((area / 9000) * (particleDensity / 40))));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        r: minSize + Math.random() * (maxSize - minSize),
        vx: (Math.random() - 0.5) * speed * 0.35,
        vy: (Math.random() - 0.5) * speed * 0.35,
        a: 0.15 + Math.random() * 0.55,
      }));
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = p.a;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reduceMotion, minSize, maxSize, particleDensity, particleColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full", className)}
      style={{ background }}
      aria-hidden
    />
  );
}
