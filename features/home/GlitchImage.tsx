"use client";

import { useEffect, useRef } from "react";

interface GlitchImageProps {
  src: string;
  intensity?: number;
  maxOffset?: number;
  speed?: number;
}

export default function GlitchImage({
  src,
  intensity = 0.05,
  maxOffset = 10,
  speed = 100,
}: GlitchImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new window.Image();
    img.src = src;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const draw = () => {
        const parent = canvas.parentElement;
        if (!parent) return;

        // 🔹 Берём размеры родителя
        const { width: w, height: h } = parent.getBoundingClientRect();

        // 🔹 Подгоняем буфер под родителя
        canvas.width = w;
        canvas.height = h;

        ctx.clearRect(0, 0, w, h);

        // 🔹 object-fit: contain
        const imgRatio = img.width / img.height;
        const canvasRatio = w / h;

        let drawW = w;
        let drawH = h;

        if (imgRatio > canvasRatio) {
          drawW = w;
          drawH = w / imgRatio;
        } else {
          drawH = h;
          drawW = h * imgRatio;
        }

        const x = (w - drawW) / 2;
        const y = (h - drawH) / 2;

        ctx.drawImage(img, x, y, drawW, drawH);

        // 🔹 glitch overlay
        const strips = Math.floor(drawH * intensity);
        for (let i = 0; i < strips; i++) {
          const stripH = 5 + Math.random() * 12;
          const sy = y + Math.random() * drawH;
          const offset = (Math.random() - 0.5) * 2 * maxOffset;

          const data = ctx.getImageData(x, sy, drawW, stripH);
          ctx.putImageData(data, x + offset, sy);
        }
      };

      draw();
      const interval = setInterval(draw, speed);

      // 🔹 Подстраиваемся под resize
      const handleResize = () => draw();
      window.addEventListener("resize", handleResize);

      return () => {
        clearInterval(interval);
        window.removeEventListener("resize", handleResize);
      };
    };
  }, [src, intensity, maxOffset, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        objectFit: "contain",
      }}
    />
  );
}