// ThemeSwitch.js
"use client";

import { useTheme } from "@hooks/useTheme";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

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
