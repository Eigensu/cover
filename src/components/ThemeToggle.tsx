import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Determine theme based on user's local time (6 AM - 6 PM = light, otherwise dark)
const getThemeByTime = (): "light" | "dark" => {
  const hour = new Date().getHours();
  // Light mode between 6 AM (6) and 6 PM (18)
  return hour >= 6 && hour < 18 ? "light" : "dark";
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    let initialTheme: "light" | "dark";
    
    if (savedTheme) {
      // User has manually set a preference
      initialTheme = savedTheme;
    } else {
      // No saved preference - use timezone-based auto detection
      initialTheme = getThemeByTime();
      console.log(`Auto-detected theme based on local time: ${initialTheme}`);
    }
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};
