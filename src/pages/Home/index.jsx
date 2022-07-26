import React, { useState } from "react";
import image from "../../assets/about-img.jpg";
import AboutComp from "../../component/About";
import ProjectComp from "../../component/Projects";
import SkillsComp from "../../component/Skills";
import ContactComp from "../../component/Contact";
import Typewriter from "typewriter-effect";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BiCodeAlt, BiMessageAlt } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";

import "./index.css";

function Home() {
  const [page, setPage] = useState("home");
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const sidebar = "side-bar";
  const sidebarResponsive = "side-bar-responsive";
  const maincontent = "main-content";
  const maincontentresponsive = "main-content-responsive";
  const navtoggler = "nav-toggler";
  const navtogglerresponsive = "nav-toggler-responsive";

  const handleOnclick = (e) => {
    e.preventDefault();
    setPage(e.target.value);
  };

  return (
    <div className="main-container">
      <div className={isOpen ? sidebar : sidebarResponsive}>
        <div className="sidebar-menu">
          <div className="logo">
            <button className="oke">
              <span>G</span>oodel
            </button>
          </div>
          <div
            onClick={toggle}
            className={isOpen ? navtoggler : navtogglerresponsive}
          >
            <span></span>
          </div>
          <div className="sidebar-item">
            <div className="menu-sidebar">
              <button
                value="home"
                className={page === "home" ? "active" : ""}
                onClick={handleOnclick}
              >
                <i>
                  <FaHome />
                </i>
                Home
              </button>
              <button
                value="about"
                className={page === "about" ? "active" : ""}
                onClick={handleOnclick}
              >
                <i>
                  <BsFillPersonFill />
                </i>
                About
              </button>
              <button
                value="skills"
                className={page === "skills" ? "active" : ""}
                onClick={handleOnclick}
              >
                <i>
                  <GoTasklist />
                </i>
                Skills
              </button>
              <button
                value="projects"
                className={page === "projects" ? "active" : ""}
                onClick={handleOnclick}
              >
                <i>
                  <BiCodeAlt />
                </i>
                Projects
              </button>
              <button
                value="contact"
                className={page === "contact" ? "active" : ""}
                onClick={handleOnclick}
              >
                <i>
                  <BiMessageAlt className="icon" />
                </i>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={isOpen ? maincontent : maincontentresponsive}>
        {page === "about" ? (
          <div className="about section">
            <div className="container">
              <div className="row">
                <AboutComp />
              </div>
            </div>
          </div>
        ) : page === "projects" ? (
          <div className="projects section">
            <div className="container">
              <div className="row">
                <ProjectComp />
              </div>
            </div>
          </div>
        ) : page === "skills" ? (
          <div className="skills section">
            <div className="container">
              <div className="row">
                <SkillsComp />
              </div>
            </div>
          </div>
        ) : page === "contact" ? (
          <div className="about section">
            <div className="container">
              <div className="row">
                <ContactComp />
              </div>
            </div>
          </div>
        ) : (
          <div className="home section">
            <div className="container">
              <div className="row">
                <div className="home-info padd-15">
                  <h3 className="hello">
                    Hello, my name is <span className="name">Fadel Giras</span>
                  </h3>
                  <h3 className="my-profession">
                    I' m a &nbsp;
                    <span>
                      <Typewriter
                        options={{
                          strings: ["Full Stack Developer", "MERN Stack Dev"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </h3>
                  <p>
                    A Full Stack Web Developer passionate about creating
                    interactive applications and experiences on the web.
                  </p>
                  <button
                    value="about"
                    className="btn hire-me"
                    onClick={handleOnclick}
                  >
                    More About Me
                  </button>
                </div>
                <div className="home-img">
                  <img src={image} alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
