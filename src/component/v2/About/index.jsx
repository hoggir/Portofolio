import React from "react";
import image from "../../../assets/pic-me.png";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "./index.css";

export default function V2about() {
  return (
    <div className="v2about-item">
      <div className="v2about-column">
        <div className="about-title">
          <h2>About Me</h2>
          <p>/ahFOO-ah dEb-ruh/</p>
        </div>
        <div className="v2about-box">
          <div className="v2about-item-40">
            <div className="v2about-img-con">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="v2about-item-60">
            <p>
              Hello World! I'm Afua Deborah, a Front-End Web Developer based out
              of Toronto. From choreography on a stage to lines of code on a web
              page, I love combining the worlds of logic and creative design to
              make eye-catching, accessible, and user-friendly websites and
              applications.
            </p>
            <p>
              Technology leads, society follows. The move towards increasing
              inclusivity and diversity in the industry through representation
              is of importance to me.
            </p>
            <p>
              I'm excited to make the leap and continue refining my skills with
              the right company. Drop me a line and/or your favourite restaurant
              in Toronto in the contact form below or check me out at:
            </p>
            <div className="v2about-item-icon-box">
              <div className="v2about-item-icon-item">
                <a href="https://github.com/hoggir">
                  <i>
                    <FaGithub />
                  </i>
                </a>
              </div>
              <div className="v2about-item-icon-item">
                <a href="https://www.linkedin.com/in/fadel-giras-981407229/">
                  <i>
                    <FaLinkedin />
                  </i>
                </a>
              </div>
              <div className="v2about-item-icon-item">
                <a href="https://twitter.com/FadelGiras">
                  <i>
                    <FaTwitter />
                  </i>
                </a>
              </div>
              <div className="v2about-item-icon-item">
                <a href="https://www.instagram.com/">
                  <i>
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
