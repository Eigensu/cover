import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center animate-fade-in px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight bg-gradient-to-br from-foreground via-foreground to-primary/70 bg-clip-text text-transparent">
          Hi, we're glad
          <br />
          you found us
        </h1>
        <div className="mt-6 w-16 h-1 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>
    </div>
  );
};
