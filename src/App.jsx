import "./App.css";
import ThemeProvider from "./theme"

import Home from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider>
        <Home />

      </ThemeProvider>
    </>
  );
}

export default App;
