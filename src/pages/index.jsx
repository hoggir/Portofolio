import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import V2Home from "./v2/Home";

const Page = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/v2" element={<V2Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Page;
