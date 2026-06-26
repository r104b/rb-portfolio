"use client";
import { useEffect, useState } from "react";

export function TwinklingStars() {
  const [stars, setStars] = useState<
    { left: number; top: number; size: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, () => {
      const isLeftSide = Math.random() > 0.5;
      const gutterWidth = window.innerWidth >= 768 ? 24 : 12;
      const edgeInset = 2;

      return {
        left: isLeftSide
          ? Math.random() * gutterWidth + edgeInset
          : 100 - edgeInset - Math.random() * gutterWidth,
        top: Math.random() * 100,
        size: Math.random() * 10 + 5,
        delay: Math.random() * 3,
      };
    });

    setStars(generatedStars);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star, index) => (
        <img
          key={index}
          src="/star.svg"
          alt=""
          aria-hidden="true"
          className="absolute animate-twinkle opacity-70"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
