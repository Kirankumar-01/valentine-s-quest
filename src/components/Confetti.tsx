import { useMemo } from "react";

const COLORS = [
  "hsl(346, 77%, 55%)",
  "hsl(340, 80%, 75%)",
  "hsl(20, 90%, 60%)",
  "hsl(40, 90%, 65%)",
  "hsl(280, 60%, 65%)",
  "hsl(180, 60%, 55%)",
];

const Confetti = () => {
  const pieces = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 6 + Math.random() * 8,
        shape: Math.random() > 0.5 ? "●" : "■",
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute animate-confetti"
          style={{
            left: `${p.left}%`,
            top: 0,
            fontSize: p.size,
            color: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.shape}
        </span>
      ))}
    </div>
  );
};

export default Confetti;
