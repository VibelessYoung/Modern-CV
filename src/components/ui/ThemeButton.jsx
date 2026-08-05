import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
z-[1000]
flex
h-12
w-12
items-center
justify-center
"
    >
      {theme === "light" ? <Sun /> : <Moon className="text-white" />}
    </button>
  );
}
