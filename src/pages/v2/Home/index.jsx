import React, { useState } from "react";
import V2jumbotron from "../../../component/v2/Jumbotron";
import "./index.css";

function V2Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="v2main-container">
      <div onClick={toggle} className={isOpen ? "tog-collapse" : "tog"}>
        <span></span>
      </div>
      <div className={isOpen ? "navbar-collapse" : "navbar"}>
        <div className="container">
          <div className="navbar-menu">
            <div className="navbar-item">
              <a href="#homr">Home</a>
              <a href="#ab">About</a>
              <a href="#pj">Projects</a>
              <a href="#ct">Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className="v2home v2section">
        <div className="container">
          <div className="v2jumbotron">
            <V2jumbotron />
          </div>
        </div>
      </div>
    </div>
  );
}

export default V2Home;
