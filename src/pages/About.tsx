import React from "react";
import { useTheme } from "../contexts";

export default function About() {
  const { theme } = useTheme();
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
