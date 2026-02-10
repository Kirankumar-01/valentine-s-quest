import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import Confetti from "@/components/Confetti";
import RunawayButton from "@/components/RunawayButton";

const PUPPY_GIF = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjF2OHRuZGN3Y2x6bGl3dXd2M2ZubGF3cXQ2Y2VpMjU2aDQ5eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BEob5qwFkSJ7G/giphy.gif";
const CELEBRATE_GIF = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFyZ3E2a2Q0bHU3OGR6d2t1MjhmenJ1NHl6NjcwcnlhdTZoMnFhOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/artj92V8o75VPL7AeQ/giphy.gif";

const Index = () => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background relative overflow-hidden px-4">
        <Confetti />
        <FloatingHearts />
        <div className="animate-bounce-in z-10 flex flex-col items-center gap-6 text-center">
          <img
            src={CELEBRATE_GIF}
            alt="Celebration!"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl text-primary drop-shadow-sm">
            Yaaay! 🎉
          </h1>
          <p className="text-xl md:text-2xl font-body font-semibold text-foreground max-w-md">
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-background relative overflow-hidden px-4">
      <FloatingHearts />
      <div className="z-10 flex flex-col items-center gap-6 text-center max-w-lg">
        <img
          src={PUPPY_GIF}
          alt="Puppy eyes"
          className="w-56 h-56 object-cover rounded-2xl shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl text-primary drop-shadow-sm leading-tight">
          Will you be my Valentine? 💌
        </h1>
        <p className="text-lg font-body text-muted-foreground font-medium">
          Pretty please? I promise I'll make it worth your while... 🥺
        </p>
        <div className="flex items-center gap-4 mt-4 flex-wrap justify-center">
          <button
            onClick={() => setAccepted(true)}
            className="px-10 py-3 rounded-full bg-primary text-primary-foreground font-body font-bold text-xl shadow-lg animate-pulse-glow transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            Yes! 💖
          </button>
          <RunawayButton />
        </div>
      </div>
    </div>
  );
};

export default Index;
