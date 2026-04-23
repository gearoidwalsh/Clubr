"use client";

import { useEffect, useRef } from "react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.04 + Math.random() * 0.06,
    hue: 35 + Math.random() * 20, // amber-gold range (25–55)
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

type BeamsBackgroundProps = Omit<ComponentProps<"div">, "ref">;

export function BeamsBackground({ className, ...props }: BeamsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);
  const BEAM_COUNT = 12;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      beamsRef.current = Array.from({ length: BEAM_COUNT }, () =>
        createBeam(window.innerWidth, window.innerHeight)
      );
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    function resetBeam(beam: Beam, index: number) {
      if (!canvas) return beam;
      const column = index % 3;
      const spacing = window.innerWidth / 3;
      beam.y = window.innerHeight + 100;
      beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 80 + Math.random() * 80;
      beam.speed = 0.4 + Math.random() * 0.5;
      beam.hue = 200 + (index * 40) / BEAM_COUNT;
      beam.opacity = 0.05 + Math.random() * 0.07;
      return beam;
    }

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `hsla(${beam.hue}, 80%, 60%, 0)`);
      gradient.addColorStop(0.1, `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(0.4, `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity})`);
      gradient.addColorStop(0.6, `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity})`);
      gradient.addColorStop(0.9, `hsla(${beam.hue}, 80%, 60%, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(1, `hsla(${beam.hue}, 80%, 60%, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = "blur(55px)";

      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) resetBeam(beam, index);
        drawBeam(ctx, beam);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div
      className={cn("fixed inset-0 h-full w-full overflow-hidden", className)}
      {...props}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
