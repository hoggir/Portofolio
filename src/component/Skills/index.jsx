import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { MdDevices } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import "./index.css";

function SkillsComp() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ position: "absolute" }} className="section-title padd-15">
        <h2>Skills</h2>
      </div>

      <div className="my-skills-box padd-15">
        <div className="skill-flex">
          <div className="ppp">
            <div className="kills-box padd-15">
              <div className="kills-item">
                <i>
                  <FaReact />
                </i>
                <h5>REACT</h5>
              </div>
            </div>
            <div className="kills-box padd-15">
              <div className="kills-item">
                <i>
                  <FaHtml5 />
                </i>
                <h5>HTML</h5>
              </div>
            </div>
            <div className="kills-box padd-15">
              <div className="kills-item">
                <i>
                  <FaCss3Alt />
                </i>
                <h5>CSS</h5>
              </div>
            </div>
            <div className="kills-box padd-15">
              <div className="kills-item">
                <i>
                  <SiJavascript />
                </i>
                <h5>javascript</h5>
              </div>
            </div>
          </div>
          <div className="ppp">
            <div className="kills-box padd-15">
              <div className="kills-item">
                <i>
                  <FaNodeJs />
                </i>
                <h5>node</h5>
              </div>
            </div>
            <div className="kills-box padd-15">
              <div className="kills-item">
                <i>
                  <SiMongodb />
                </i>
                <h5>mongodb</h5>
              </div>
            </div>
            <div className="kills-box padd-15">
              <div className="kills-item">
                <i>
                  <MdDevices />
                </i>
                <h5>RESPONSIVE DESIGN</h5>
              </div>
            </div>
            <div className="kills-box padd-15">
              <div className="kills-item">
                <i>
                  <BiCodeAlt />
                </i>
                <h5>REST APIS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsComp;
