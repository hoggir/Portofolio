import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import V2Home from "./v2/Home";

const Page = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<V2Home />} />
          <Route exact path="/v2" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Page;
