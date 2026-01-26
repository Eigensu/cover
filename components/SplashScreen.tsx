import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
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
  }, [onComplete, mounted]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="text-center animate-fade-in px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
            <span className="bg-gradient-to-br from-amber-600 via-orange-500 to-red-400 bg-clip-text text-transparent">
              Hi, we're glad
              <br />
              you found us
            </span>
          </h1>
          <div className="mt-6 w-16 h-1 mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background ${
        fadeOut ? "opacity-0" : "opacity-100"
      } transition-opacity duration-800`}
    >
      <div className="text-center animate-fade-in px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
          <span className={isDark 
            ? "bg-gradient-to-br from-cyan-300 via-blue-400 to-sky-300 bg-clip-text text-transparent"
            : "bg-gradient-to-br from-amber-600 via-orange-500 to-red-400 bg-clip-text text-transparent"
          }>
            Hi, we're glad
            <br />
            you found us
          </span>
        </h1>
        <div className={`mt-6 w-16 h-1 mx-auto ${
          isDark
            ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            : "bg-gradient-to-r from-transparent via-orange-500 to-transparent"
        }`}></div>
      </div>
    </div>
  );
};
