import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DomainPage from "./DomainPage";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode((m) => !m);

  return (
    <BrowserRouter>
      <div className={darkMode ? "app dark" : "app light"}>
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route
            path="/domain/:domainName"
            element={<DomainPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;