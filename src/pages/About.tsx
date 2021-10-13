import React from "react";
import { ThemeContext } from "../contexts";

export default function About() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme?.secondary.main,
        color: theme?.secondary.text,
      }}
    >
      jairo
    </div>
  );
}
