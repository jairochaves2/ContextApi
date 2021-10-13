import React from "react";
import { ThemeContext } from "../contexts";
import { ThemeOptions } from "../contexts/selected";

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeOptions | null>(null);
  const [themeValue, setThemeValue] = React.useState<boolean>(false);
  const toggleDark = (value: boolean) => {
    setThemeValue(value);
    if (value) {
      let darkTheme: ThemeOptions;
      darkTheme = {
        primary: { main: "#000", text: "#fff" },
        secondary: { main: "#1e1e1e", text: "#fff" },
      };
      setTheme(darkTheme);
    } else {
      let lightTheme: ThemeOptions;
      lightTheme = {
        primary: { main: "#fff", text: "#000" },
        secondary: { main: "#e1e1e1", text: "#000" },
      };
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setThemeValue: toggleDark, themeValue }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
