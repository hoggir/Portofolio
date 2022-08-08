import React from "react";
import Container from "react-bootstrap/Container";
import Rocket from "../../assets/rocket.png";
import "./index.css";

export default function TestPage() {
  return (
    <div className="bg-port">
      <Container>
        <div className="test-con">
          <div className="test-con-left">
            <div className="test-con-left-con">
              <div className="test-con-left-con-100">
                <div className="test-con-left-con-col">
                  <h4>hi there! i'm</h4>
                  <h1>Fadel Giras</h1>
                  <p>
                    I'm a web developer with a focus on the MERN stack, but
                    still exploring other technologies and frameworks that catch
                    my interest! if you're looking for a developer to add to
                    your team, I'd love to hear from you!
                  </p>
                  <div className="test-con-left-action">
                    <button className="test-btn-blur-bg">resume</button>
                    <span>or</span>
                    <button className="test-btn-blur-bg">send mail</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="test-con-right">
            <div className="test-con-right-con">
              <div className="test-con-right-con-imgcon">
                <img className="test-con-right-con-img" src={Rocket} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
