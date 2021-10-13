import React, { useContext } from "react";
import { ThemeContext } from "../contexts";

export default function Home() {
  const { theme, setThemeValue, themeValue } = useContext(ThemeContext);
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
