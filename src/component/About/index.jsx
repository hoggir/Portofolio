import React from "react";
import "./index.css";

function AboutComp() {
  return (
    <div>
      <div className="section-title padd-15">
        <h2>About Me</h2>
      </div>
      <div className="about-content padd-15">
        <div className="about-bio">
          <h3>
            I'm Fadel Giras and <span>Web Developer</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            pariatur, impedit voluptatem et officiis inventore voluptatum ex
            numquam asperiores dolorum? Sequi culpa reprehenderit quibusdam ab
            dignissimos nisi vitae! In, omnis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
        <div className="about-data">
          <div className="my-bio">
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
            <div className="about-btn mt-4">
              <button className="btn ml-2">Resume</button>
            </div>
          </div>

          <div className="my-skills padd-15">
            <div className="skill-item">
              <div className="skill-name">
                <h5>CSS</h5>
                <div className="skill-percent">75%</div>
              </div>
              <div className="percent-bg">
                <div className="percent-fg" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">
                <h5>JS</h5>
                <div className="skill-percent">80%</div>
              </div>
              <div className="percent-bg">
                <div className="percent-fg" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">
                <h5>HTML</h5>
                <div className="skill-percent">80%</div>
              </div>
              <div className="percent-bg">
                <div className="percent-fg" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
