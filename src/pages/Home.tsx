import React from "react";
import { useTheme } from "../contexts";

export default function Home() {
  const { theme, setThemeValue, themeValue } = useTheme();
  function toggleTheme() {
    setThemeValue(!themeValue);
  }
  return (
    <div
      style={{
        backgroundColor: theme?.secondary.main,
        color: theme?.secondary.text,
      }}
    >
      Home
      <button
        style={{
          backgroundColor: theme?.secondary.main,
          color: theme?.secondary.text,
        }}
        onClick={toggleTheme}
      >
        Muda tema
      </button>
    </div>
  );
}
