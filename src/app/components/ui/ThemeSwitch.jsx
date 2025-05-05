"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else if (stored === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("system");
      applySystemTheme();
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "system") {
      applySystemTheme();
    }
  }, [theme]);

  function applySystemTheme() {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
  }

  function toggleTheme() {
    setTheme((prev) => {
      if (prev === "system") {
        localStorage.setItem("theme", "dark");
        return "dark";
      } else if (prev === "dark") {
        localStorage.setItem("theme", "light");
        return "light";
      } else {
        localStorage.removeItem("theme");
        return "system";
      }
    });
  }

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <span className="sr-only">Toggle Dark Mode</span>
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        className="sr-only peer"
      />

      <div className="peer after:top-[2px] after:left-[2px] after:absolute bg-gray-200 after:bg-white peer-checked:bg-blue-600 after:border after:border-gray-300 peer-checked:after:border-white rounded-full after:rounded-full peer-focus:outline-none w-11 after:w-5 h-6 after:h-5 after:content-[''] after:transition-all peer-checked:after:translate-x-full"></div>
      <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm">
        {isDark ? "Dark Mode Enabled" : "Light Mode Enabled"}
      </span>
    </label>
  );
}
