import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkmode, setIsDarkmode] = useState(true);

  const toggleTheme = () => {
    if (isDarkmode) {
      document.documentElement.classList.remove("dark");
      setIsDarkmode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkmode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn("p-2 rounded-full transition-colors duration-300 focus:outline-hidden")}
    >
      {isDarkmode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
