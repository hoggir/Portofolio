import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import V2Home from "./pages/v2/Home";
import TestPage from "./pages/Test";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<V2Home />} />
        <Route exact path="/test" element={<TestPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
