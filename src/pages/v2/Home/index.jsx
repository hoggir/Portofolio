import React, { useState } from "react";
import V2jumbotron from "../../../component/v2/Jumbotron";
import V2about from "../../../component/v2/About";
import V2skills from "../../../component/v2/Skills";
import V2project from "../../../component/v2/Project";
import V2contact from "../../../component/v2/Contact";
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
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className="v2home v2section">
        <div className="container">
          <div id="home" className="v2jumbotron">
            <V2jumbotron />
          </div>
          <div id="about" className="v2about">
            <V2about />
          </div>
          <div id="skills" className="v2skills">
            <V2skills />
          </div>
          <div id="projects" className="v2skills">
            <V2project />
          </div>
          <div id="contact" className="v2skills">
            <V2contact />
          </div>
        </div>
      </div>
      <div className="back-to-top">
        <a href="#home">back to top</a>
      </div>
      <div className="design-by">MADE BY FADEL GIRAS 2022</div>
    </div>
  );
}

export default V2Home;
