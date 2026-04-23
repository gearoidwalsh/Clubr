"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type DottedSurfaceProps = Omit<React.ComponentProps<"div">, "ref">;

function hasWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl") ||
      canvas.getContext("webgl2")
    );
  } catch {
    return false;
  }
}

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points[];
  } | null>(null);
  const rafRef = useRef(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (!hasWebGL()) {
      setFailed(true);
      return;
    }

    let cancelled = false;

    try {
      const SEPARATION = 150;
      const AMOUNTX = 25;
      const AMOUNTY = 35;

      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x000000, 2000, 10000);

      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        10000,
      );
      camera.position.set(0, 300, 1400);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      container.appendChild(renderer.domElement);

      const positions: number[] = [];
      const colors: number[] = [];
      const geometry = new THREE.BufferGeometry();

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions.push(
            ix * SEPARATION - (AMOUNTX * SEPARATION) / 2,
            0,
            iy * SEPARATION - (AMOUNTY * SEPARATION) / 2,
          );
          const useTeal = Math.random() > 0.3;
          if (useTeal) {
            colors.push(45 / 255, 212 / 255, 191 / 255);
          } else {
            colors.push(1, 1, 1);
          }
        }
      }

      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 9,
        vertexColors: true,
        transparent: true,
        opacity: 0.5,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      let count = 0;

      const animate = () => {
        if (cancelled) return;
        rafRef.current = requestAnimationFrame(animate);
        const positionAttribute = geometry.attributes.position;
        const pos = positionAttribute.array as Float32Array;

        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            pos[i * 3 + 1] =
              Math.sin((ix + count) * 0.3) * 70 + Math.sin((iy + count) * 0.5) * 70;
            i++;
          }
        }

        positionAttribute.needsUpdate = true;
        renderer.render(scene, camera);
        count += 0.04;
      };

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);
      animate();

      sceneRef.current = {
        scene,
        camera,
        renderer,
        particles: [points],
      };

      return () => {
        cancelled = true;
        cancelAnimationFrame(rafRef.current);
        window.removeEventListener("resize", handleResize);
        if (sceneRef.current) {
          sceneRef.current.scene.traverse((object) => {
            if (object instanceof THREE.Points) {
              object.geometry.dispose();
              if (Array.isArray(object.material)) {
                object.material.forEach((m) => m.dispose());
              } else {
                (object.material as THREE.Material).dispose();
              }
            }
          });
          sceneRef.current.renderer.dispose();
          if (container && sceneRef.current.renderer.domElement) {
            container.removeChild(sceneRef.current.renderer.domElement);
          }
        }
      };
    } catch {
      setFailed(true);
    }
  }, []);

  if (failed) {
    return (
      <div
        className={cn(
          "pointer-events-none fixed inset-0 h-full w-full bg-gradient-to-b from-[#070708] via-[#000000] to-[#000000]",
          className,
        )}
        {...props}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none fixed inset-0 h-full w-full", className)}
      {...props}
    />
  );
}
