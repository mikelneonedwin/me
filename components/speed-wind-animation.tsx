"use client";

import * as React from "react";

interface StreamParticle {
  id: number;
  yPercent: number; // Vertical position (0 - 100%)
  length: number; // Length of the gust streak in pixels
  thickness: number; // Height/stroke thickness
  speed: number; // Pixels per second
  opacity: number; // Base opacity
  delay: number; // Start offset
  swayAmp: number; // Gentle wave amplitude
  swayFreq: number; // Oscillation rate
}

interface SpeedWindAnimationProps {
  className?: string;
  isBackground?: boolean;
}

export function SpeedWindAnimation({
  className,
  isBackground = false,
}: SpeedWindAnimationProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Handle high DPI crisp rendering & dynamic resize
    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Number of particles proportional to space
    const PARTICLE_COUNT = isBackground ? 56 : 48;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => {
      const isFastBurst = Math.random() < 0.35;
      const baseOpacity = isBackground ? 0.22 : 0.6;
      return {
        x: Math.random() * (width || 1200),
        y: Math.random() * (height || 800),
        length: isFastBurst
          ? 180 + Math.random() * 200
          : 90 + Math.random() * 130,
        thickness: Math.random() < 0.25 ? 2.0 : 1.0 + Math.random() * 0.8,
        speed: isFastBurst
          ? 650 + Math.random() * 400
          : 300 + Math.random() * 250,
        opacity:
          (isFastBurst ? baseOpacity : baseOpacity * 0.5) *
          (0.6 + Math.random() * 0.4),
        isAccent: Math.random() < 0.45, // Primary emerald breeze
      };
    });

    let lastTime = performance.now();

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Render each wind streak horizontally
      for (const p of particles) {
        p.x += p.speed * dt;

        // Wrap around seamlessly
        if (p.x - p.length > width) {
          p.x = -p.length - Math.random() * 100;
          p.y = Math.random() * height;
        }

        const tailX = p.x - p.length;
        const headX = p.x;
        const y = p.y;

        // Create sleek tapered gradient from tail to head
        const grad = ctx.createLinearGradient(tailX, y, headX, y);

        if (p.isAccent) {
          // Primary emerald breeze (matches --primary)
          grad.addColorStop(0, "rgba(52, 211, 153, 0)");
          grad.addColorStop(0.6, `rgba(52, 211, 153, ${p.opacity * 0.45})`);
          grad.addColorStop(1, `rgba(52, 211, 153, ${p.opacity})`);
        } else {
          // Crisp silver-white gust
          grad.addColorStop(0, "rgba(255, 255, 255, 0)");
          grad.addColorStop(0.65, `rgba(255, 255, 255, ${p.opacity * 0.4})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${p.opacity})`);
        }

        ctx.strokeStyle = grad;
        ctx.lineWidth = p.thickness;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(tailX, y);
        ctx.lineTo(headX, y);
        ctx.stroke();

        // High speed glowing tip point on fastest gusts
        if (p.speed > 580) {
          ctx.beginPath();
          ctx.arc(headX, y, p.thickness * 1.15, 0, Math.PI * 2);
          ctx.fillStyle = p.isAccent
            ? `rgba(167, 243, 208, ${Math.min(1, p.opacity * 1.1)})`
            : `rgba(255, 255, 255, ${Math.min(1, p.opacity * 1.1)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isBackground]);

  return (
    <div
      aria-hidden="true"
      className={
        className ||
        "relative w-full h-full min-h-[300px] lg:min-h-[360px] pointer-events-none select-none overflow-hidden rounded-2xl flex items-center justify-center"
      }
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
