import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  height?: number;
}

export const Logo = ({ className = "", height = 28 }: LogoProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <svg 
      width="100" 
      height="32" 
      viewBox="0 0 100 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ height: `${height}px`, width: 'auto' }}
    >
      <text 
        x="0" 
        y="24" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="24" 
        fontWeight="600" 
        letterSpacing="0"
      >
        <tspan fill={isDark ? "#85c2e0" : "#593c26"}>eigen</tspan>
        <tspan fill={isDark ? "#c9e5f3" : "#e9b896"}>su</tspan>
      </text>
    </svg>
  );
};