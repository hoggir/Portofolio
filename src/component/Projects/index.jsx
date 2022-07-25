import React from "react";
import project1 from "../../assets/project-1.jpg";
import "./index.css";

function Projects() {
  return (
    <div>
      <div className="section-title padd-15">
        <h2>Projects</h2>
      </div>
      <h3 className="padd-15 mb-4">My Projects :</h3>

      
        <div className="project">
          <div className="project1">
            <div className="project-box">
              <div className="project-img">
                <img src={project1} alt="" />
              </div>
            </div>
          </div>

          <div className="project1">
            <div className="project-box">
              <div className="project-img">
                <img src={project1} alt="" />
              </div>
            </div>
          </div>

          <div className="project1">
            <div className="project-box">
              <div className="project-img">
                <img src={project1} alt="" />
              </div>
            </div>
          </div>
        </div>
      
        <div className="project">
          <div className="project1">
            <div className="project-box">
              <div className="project-img">
                <img src={project1} alt="" />
              </div>
            </div>
          </div>

          <div className="project1">
            <div className="project-box">
              <div className="project-img">
                <img src={project1} alt="" />
              </div>
            </div>
          </div>
          <div className="project1">
            <div className="project-box">
              <div className="project-img">
                <img src={project1} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Projects;
