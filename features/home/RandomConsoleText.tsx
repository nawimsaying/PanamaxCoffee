// components/RandomConsoleText.tsx
import { useEffect, useState } from "react";

interface RandomConsoleTextProps {
  length: number;       // сколько символов в строке
  interval?: number;    // скорость обновления (мс)
}

const characters = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function RandomConsoleText({
  length,
  interval = 50,
}: RandomConsoleTextProps) {
  const [display, setDisplay] = useState<string[]>([]);

  useEffect(() => {
    // Инициализация случайными символами
    setDisplay(Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]));

    const timer = setInterval(() => {
      setDisplay((prev) =>
        prev.map(() => characters[Math.floor(Math.random() * characters.length)])
      );
    }, interval);

    return () => clearInterval(timer);
  }, [length, interval]);

  return (
    <span style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
      {display.join("")}
    </span>
  );
}