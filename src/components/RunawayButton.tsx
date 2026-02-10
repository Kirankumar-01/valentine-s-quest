import { useState, useCallback, useRef } from "react";

const NO_TEXTS = [
  "No 😢",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Pls? 🥺",
  "Don't do this 💔",
  "I'll cry...",
  "You're breaking my heart",
  "Fine... SIKE!",
  "Catch me!",
];

const RunawayButton = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const runAway = useCallback(() => {
    const maxX = window.innerWidth - 160;
    const maxY = window.innerHeight - 60;
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setPosition({ x: newX, y: newY });
    setTextIndex((prev) => (prev + 1) % NO_TEXTS.length);
  }, []);

  return (
    <button
      ref={btnRef}
      onMouseEnter={runAway}
      onTouchStart={runAway}
      className="px-8 py-3 rounded-full bg-muted text-muted-foreground font-body font-semibold text-lg border-2 border-border transition-all duration-200 hover:scale-95 select-none cursor-pointer"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        position: "relative",
        zIndex: 10,
      }}
    >
      {NO_TEXTS[textIndex]}
    </button>
  );
};

export default RunawayButton;
