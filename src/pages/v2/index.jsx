import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import V2Home from "./Home";

const Componentscon = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<V2Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Componentscon;
