import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ListIcon from "@mui/icons-material/List";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import image from "../../assets/about-img.jpg";

import "./index.css";

function HomeCoba() {
  return (
    <div className="main-container">
      <div className="aside">
        <div className="logo">
          <a href="oke">
            <span>G</span>udel
          </a>
        </div>
        <div className="nav-toggler">
          <span></span>
        </div>
        <ul className="nav">
          <li>
            <a href="oke" className="active">
              <i>
                <HomeIcon />
              </i>
              Home
            </a>
          </li>
          <li>
            <a href="oke">
              <i>
                <PersonIcon />
              </i>
              About
            </a>
          </li>
          <li>
            <a href="oke">
              <i>
                <ListIcon />
              </i>
              Services
            </a>
          </li>
          <li>
            <a href="oke">
              <i>
                <BusinessCenterIcon />
              </i>
              Portfolio
            </a>
          </li>
          <li>
            <a href="oke">
              <i>
                <ChatIcon />
              </i>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="main-content">
        {/* START HOME SECTION */}
        <div className="home section hidden">
          <div className="container">
            <div className="row">
              <div className="home-info padd-15">
                <h3 className="hello">
                  Hello, my name is <span className="name">Fadel Giras</span>
                </h3>
                <h3 className="my-profession">
                  I' m a <span className="typing">MERN developer</span>
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                  id ipsam accusamus, excepturi laudantium quas doloremque
                  possimus exercitationem magni aliquid culpa tempora?
                  Reiciendis unde rem quibusdam necessitatibus?
                </p>
                <a href="#oke" className="btn hire-me">
                  More About Me
                </a>
              </div>
              <div className="home-img">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* END HOME SECTION */}
        {/* START ABOUT SECTION */}
        <div className="about section">
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2>About Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="about-content padd-15">
                <div className="row">
                  <div className="about-text padd-15">
                    <h3>
                      I'm Fadel Giras and <span>Web Developer</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, voluptas fugiat? Porro nobis pariatur consequatur
                      eius beatae. Quisquam incidunt blanditiis, eligendi ullam
                      consectetur sint, optio nihil, atque vitae a deleniti.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Omnis et excepturi voluptatum dignissimos dolorum odit
                      nisi doloribus facilis est, accusantium, placeat impedit!
                      Maiores commodi explicabo error consectetur est ullam
                      saepe?
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="personal-info padd-15">
                    <div className="row">
                      <div className="info-item padd-15">
                        <p>
                          Birthday : <span>13 oct 1999</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Age : <span>22</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Github : <span>www.github.com</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Email : <span>fadelpopeye@gmail.com</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Degree : <span>Associate's Degree</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Phone : <span>081267762033</span>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="buttons padd-15">
                        <a href="#o" className="btn">
                          Download CV
                        </a>
                        <a href="#contact" className="btn hire-me">
                          Hire Me
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="skills padd-15">
                    <div className="row">
                      <div className="skill-item padd-15">
                        <h5>CSS</h5>
                        <div className="iprogress">
                          <div
                            className="progress-in"
                            style={{ width: "76%" }}
                          ></div>
                          <div className="skill-percent">76%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>JS</h5>
                        <div className="iprogress">
                          <div
                            className="progress-in"
                            style={{ width: "86%" }}
                          ></div>
                          <div className="skill-percent">86%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>HTML</h5>
                        <div className="iprogress">
                          <div
                            className="progress-in"
                            style={{ width: "96%" }}
                          ></div>
                          <div className="skill-percent">96%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END ABOUT SECTION */}
      </div>
    </div>
  );
}
export default HomeCoba;
