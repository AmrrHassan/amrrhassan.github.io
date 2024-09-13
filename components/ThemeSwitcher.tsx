import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-md"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-500" size={20} />
      ) : (
        <FaMoon className="text-gray-900" size={20} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
