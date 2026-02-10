import { useState, useCallback } from "react";

const NO_TEXTS = [
  "No 😢",
  "Are you sure, Sneha?",
  "Really sure? 🥺",
  "Think again!",
  "Pls Sneha? 🥺",
  "Don't do this 💔",
  "I'll cry...",
  "You're breaking my heart",
  "Fine... SIKE!",
  "Catch me if you can!",
];

interface RunawayButtonProps {
  onAttempt: () => void;
}

const RunawayButton = ({ onAttempt }: RunawayButtonProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const runAway = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    // Keep button within visible mobile viewport
    const safeW = Math.min(window.innerWidth, 400);
    const safeH = Math.min(window.innerHeight * 0.4, 300);
    const newX = (Math.random() - 0.5) * safeW;
    const newY = (Math.random() - 0.5) * safeH;

    setPosition({ x: newX, y: newY });
    setTextIndex((prev) => (prev + 1) % NO_TEXTS.length);
    onAttempt();
  }, [onAttempt]);

  return (
    <button
      onMouseEnter={runAway}
      onTouchStart={runAway}
      onClick={(e) => e.preventDefault()}
      className="px-8 py-3 rounded-full bg-muted text-muted-foreground font-body font-semibold text-base border-2 border-border select-none cursor-pointer whitespace-nowrap"
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
