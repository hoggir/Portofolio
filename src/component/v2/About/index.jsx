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
          <p>/ahGI-ah dRAb-ruS/</p>
        </div>
        <div className="v2about-box">
          <div className="v2about-item-40">
            <div className="v2about-img-con">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="v2about-item-60">
            <p>
              Hello World! I'm Fadel Giras, a Full-Stack Web Developer based in
              Yogyakarta. I love to combine the world of logic and creative
              design to create attractive, accessible, and user-friendly
              websites and apps.
            </p>
            <p>
              Technology leads, society follows. The step towards increasing
              inclusivity and diversity in the industry through representation
              is important to me.
            </p>
            <p>
              I'm excited to make the leap and keep perfecting my skills with
              the right company. Check me out at:
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
