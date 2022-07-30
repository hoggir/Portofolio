import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { MdDevices } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import "./index.css";

export default function V2skillsbkp() {
  return (
    <div className="v2about-item">
      <div className="v2about-column">
        <div className="about-title">
          <h2>skills</h2>
        </div>
        <div className="v2skills-box">
          <div className="v2skill-flex">
            <div className="v2ppp">
              <div className="v2skill-box">
                <div className="v2skill-item">
                  <i>
                    <FaHtml5 />
                  </i>
                  <h5>html</h5>
                </div>
              </div>
              <div className="v2skill-box">
                <div className="v2skill-item">
                  <i>
                    <FaCss3Alt />
                  </i>
                  <h5>css</h5>
                </div>
              </div>
              <div className="v2skill-box">
                <div className="v2skill-item">
                  <i>
                    <SiJavascript />
                  </i>
                  <h5>javascript</h5>
                </div>
              </div>
              <div className="v2skill-box">
                <div className="v2skill-item">
                  <i>
                    <BiCodeAlt />
                  </i>
                  <h5>rest apis</h5>
                </div>
              </div>
            </div>
            <div className="v2ppp">
              <div className="v2skill-box">
                <div className="v2skill-item">
                  <i>
                    <FaNodeJs />
                  </i>
                  <h5>node</h5>
                </div>
              </div>
              <div className="v2skill-box">
                <div className="v2skill-item">
                  <i>
                    <FaReact />
                  </i>
                  <h5>react</h5>
                </div>
              </div>
              <div className="v2skill-box">
                <div className="v2skill-item">
                  <i>
                    <SiMongodb />
                  </i>
                  <h5>mongodb</h5>
                </div>
              </div>
              <div className="v2skill-box">
                <div className="v2skill-item">
                  <i>
                    <MdDevices />
                  </i>
                  <h5>responsive design</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
