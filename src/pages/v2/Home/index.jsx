import React, { useState } from "react";
import Container from "react-bootstrap/Container";
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
        <Container>
          <div className="navbar-menu">
            <div className="navbar-item">
              <a href="#homr">Home</a>
              <a href="#ab">About</a>
              <a href="#pj">Projects</a>
              <a href="#ct">Contact</a>
            </div>
          </div>
        </Container>
      </div>
      <div className="v2home v2section">
        <Container>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            recusandae voluptatem possimus labore! Aperiam corporis architecto
            voluptatem repellat magnam dicta sequi minus laboriosam voluptatibus
            accusamus, inventore esse reprehenderit aut repellendus!
          </h1>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            recusandae voluptatem possimus labore! Aperiam corporis architecto
            voluptatem repellat magnam dicta sequi minus laboriosam voluptatibus
            accusamus, inventore esse reprehenderit aut repellendus!
          </h1>
        </Container>
      </div>
    </div>
  );
}

export default V2Home;
