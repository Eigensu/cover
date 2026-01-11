import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);

    const observer = new MutationObserver(() => {
      const nowDark = document.documentElement.classList.contains("dark");
      setIsDark(nowDark);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 800);
    }, 2000);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center animate-fade-in px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
          <span className={isDark 
            ? "bg-gradient-to-br from-foreground via-accent to-primary bg-clip-text text-transparent"
            : "bg-gradient-to-br from-accent via-foreground to-primary bg-clip-text text-transparent"
          }>
            Hi, we're glad
            <br />
            you found us
          </span>
        </h1>
        <div className="mt-6 w-16 h-1 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>
    </div>
  );
};
