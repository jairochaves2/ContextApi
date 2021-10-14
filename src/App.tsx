import React from "react";
import "./App.css";
import { ThemeProvider } from "./providers";
import Home from "./pages/Home";
import About from "./pages/About";
import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridAutoRows: "100vh",
          columnGap: "8px",
        }}
      >
        <Home />
        <About />
      </Container>
    </ThemeProvider>
  );
}

export default App;
