import React from "react";
import "./App.css";
import { ThemeProvider } from "./providers";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider>
      <Home />
      <About />
    </ThemeProvider>
  );
}

export default App;
