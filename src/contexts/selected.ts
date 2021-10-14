import { createContext, useContext } from "react";

interface palletteTheme {
  main: string;
  text: string;
}
export interface ThemeOptions {
  primary: palletteTheme;
  secondary: palletteTheme;
}

interface ContextType {
  theme: ThemeOptions | null;
  setThemeValue: (theTheme: boolean) => void;
  themeValue: boolean;
}
const primary: palletteTheme = {
  main: "#ff0000",
  text: "#000000",
};
const secondary: palletteTheme = {
  main: "#0000ff",
  text: "#ffffff",
};
const themeContext = createContext<ContextType>({
  theme: { primary, secondary },
  setThemeValue: () => {},
  themeValue: false,
});
export function useTheme(): ContextType {
  const context = useContext(themeContext);
  return context;
}
export default themeContext;
