import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import Confetti from "@/components/Confetti";
import RunawayButton from "@/components/RunawayButton";

const PUPPY_GIF = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjF2OHRuZGN3Y2x6bGl3dXd2M2ZubGF3cXQ2Y2VpMjU2aDQ5eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BEob5qwFkSJ7G/giphy.gif";
const CELEBRATE_GIF = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFyZ3E2a2Q0bHU3OGR6d2t1MjhmenJ1NHl6NjcwcnlhdTZoMnFhOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/artj92V8o75VPL7AeQ/giphy.gif";

const BG_CLASSES = [
  "bg-background",                    // default
  "bg-valentine-blush",               // 1st No attempt
  "bg-gradient-to-b from-valentine-blush to-valentine-cream", // 2nd
];

const SAD_GIFS = [
  PUPPY_GIF,
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjhkNnBjZnl5Y3Z6cXRtaGZ1ZThmMGhxNDk4aXB2OHQzbGMyYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OPU6wzx8JrHna/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG1xaGJiOGN5NW9rZnMzcWg0ZnJlMjNqd3RjaTRwZnp2MTMxMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mCRJDo24UvJMA/giphy.gif",
];

const Index = () => {
  const [accepted, setAccepted] = useState(false);
  const [noAttempts, setNoAttempts] = useState(0);

  const handleNoAttempt = () => {
    setNoAttempts((prev) => prev + 1);
  };

  const currentBg = BG_CLASSES[Math.min(noAttempts, BG_CLASSES.length - 1)];
  const currentGif = SAD_GIFS[Math.min(noAttempts, SAD_GIFS.length - 1)];

  if (accepted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-svh bg-background relative overflow-hidden px-4">
        <Confetti />
        <FloatingHearts />
        <div className="animate-bounce-in z-10 flex flex-col items-center gap-5 text-center px-4">
          <img
            src={CELEBRATE_GIF}
            alt="Celebration!"
            className="w-56 h-56 object-cover rounded-2xl shadow-lg"
          />
          <h1 className="text-3xl md:text-5xl text-primary drop-shadow-sm">
            Yaaay Sneha! 🎉
          </h1>
          <p className="text-lg md:text-xl font-body font-semibold text-foreground max-w-sm">
            I knew you'd say yes! You've just made me the happiest person ever! 💕
          </p>
          <div className="flex gap-2 text-3xl">
            {"💖💗💝💘💕".split("").map((e, i) => (
              <span
                key={i}
                className="animate-float-heart"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-svh relative overflow-hidden px-4 transition-colors duration-700 ${currentBg}`}
    >
      <FloatingHearts />
      <div className="z-10 flex flex-col items-center gap-5 text-center max-w-sm w-full">
        <img
          src={currentGif}
          alt="Puppy eyes"
          className="w-48 h-48 object-cover rounded-2xl shadow-lg transition-all duration-500"
        />
        <h1 className="text-3xl md:text-4xl text-primary drop-shadow-sm leading-tight">
          Sneha, will you be my Valentine? 💌
        </h1>
        <p className="text-base font-body text-muted-foreground font-medium">
          Pretty please? I promise I'll make it worth your while... 🥺
        </p>

        {noAttempts >= 2 && (
          <p className="text-sm font-body text-primary font-bold animate-bounce-in">
            Sneha please, you're making me cry! 😭
          </p>
        )}

        <div className="flex items-center gap-4 mt-2 flex-wrap justify-center min-h-[60px]">
          <button
            onClick={() => setAccepted(true)}
            className="px-10 py-3 rounded-full bg-primary text-primary-foreground font-body font-bold text-lg shadow-lg animate-pulse-glow transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            Yes! 💖
          </button>
          <RunawayButton onAttempt={handleNoAttempt} />
        </div>
      </div>
    </div>
  );
};

export default Index;
