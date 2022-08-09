import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Rocket from "../../assets/rocket.png";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  FaGithub,
  FaFirefoxBrowser,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "animate.css";
import "./index.css";

export default function TestPage() {
  const [containerLeft, setContainerLeft] = useState("test-con-left");
  const [containerRight, setContainerRight] = useState("test-con-right");
  const [hireMeLeft, setHireMeLeft] = useState("test-con-hireme-left hidden");
  const [hireMeRight, setHireMeRight] = useState(
    "test-con-hireme-right hidden"
  );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w60s3hd",
        "template_lsmeb2q",
        e.target,
        "L6s72OgQK1D51yCw1"
      )
      .then(
        (result) => {
          Swal.fire(
            "Message Delivered!",
            "Your message was sent successfully",
            "success"
          );
          console.log(result.text);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          console.log(error.text);
        }
      );
  };

  const hireMeBtn = (e) => {
    e.preventDefault();
    setContainerLeft("test-con-left hidden");
    setContainerRight("test-con-right hidden");
    setHireMeLeft("test-con-hireme-left");
    setHireMeRight("test-con-hireme-right");
  };

  const backHomeBtn = (e) => {
    e.preventDefault();
    setContainerLeft("test-con-left");
    setContainerRight("test-con-right");
    setHireMeLeft("test-con-left hidden");
    setHireMeRight("test-con-right hidden");
  };

  return (
    <div className="bg-port">
      <Container>
        <div className="test-con">
          <div className={hireMeLeft}>
            <Form onSubmit={sendEmail}>
              <div className="test-con-mail-form-con animate__animated animate__backInDown">
                <Form.Control
                  style={{ height: 46 }}
                  type="name"
                  placeholder="Your Name"
                  name="from_name"
                  className="test-con-mail-form"
                />
              </div>
              <div className="test-con-mail-form-con animate__animated animate__backInLeft">
                <Form.Control
                  style={{ height: 46 }}
                  type="name"
                  placeholder="Your Email"
                  name="form_email"
                  className="test-con-mail-form"
                />
              </div>
              <div className="test-con-mail-form-con animate__animated animate__backInRight">
                <Form.Control
                  as="textarea"
                  rows={5}
                  className="test-con-mail-form"
                  placeholder="Your Message"
                  name="message"
                />
              </div>
              <div className="test-con-mail-button-con">
                <div className="test-con-left-action animate__animated animate__backInUp">
                  <button onClick={backHomeBtn} className="test-btn-blur-bg">
                    home
                  </button>
                  <span>or</span>
                  <button className="test-btn-blur-bg" type="submit">
                    send
                  </button>
                </div>
              </div>
            </Form>
          </div>
          <div className={hireMeRight}>
            <div className="test-con-hireme-right-con">
              <p className="animate__animated animate__backInDown">
                I'm available to grab a coffee and chat! Drop a comment,
                question, concern, or Spotify playlist, and thanks for stopping
                by!
              </p>
              <p className="animate__animated animate__backInRight">Find Me:</p>
              <div className="test-con-hireme-right-con-icon">
                <div className="test-con-hireme-right-con-icon-25 animate__animated animate__backInDown">
                  <a href="https://github.com/hoggir">
                    <i>
                      <FaGithub />
                    </i>
                  </a>
                </div>
                <div className="test-con-hireme-right-con-icon-25 animate__animated animate__backInLeft">
                  <a href="https://fdportofolio.herokuapp.com/">
                    <i>
                      <FaFirefoxBrowser />
                    </i>
                  </a>
                </div>
                <div className="test-con-hireme-right-con-icon-25 animate__animated animate__backInRight">
                  <a href="https://twitter.com/FadelGiras">
                    <i>
                      <FaTwitter />
                    </i>
                  </a>
                </div>
                <div className="test-con-hireme-right-con-icon-25 animate__animated animate__backInUp">
                  <a href="https://www.instagram.com/">
                    <i>
                      <FaInstagram />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={containerLeft}>
            <div className="test-con-left-con">
              <div className="test-con-left-con-100">
                <div className="test-con-left-con-col">
                  <h4 className="animate__animated animate__backInDown">
                    hi there! i'm
                  </h4>
                  <h1 className="animate__animated animate__backInLeft">
                    Fadel Giras
                  </h1>
                  <p className="animate__animated animate__backInRight">
                    I'm a web developer with a focus on the MERN stack, but
                    still exploring other technologies and frameworks that catch
                    my interest! if you're looking for a developer to add to
                    your team, I'd love to hear from you!
                  </p>
                  <div className="test-con-left-action animate__animated animate__backInUp">
                    <a href="https://fdportofolio.herokuapp.com/">
                      <button className="test-btn-blur-bg">portfolio</button>
                    </a>
                    <span>or</span>
                    <button onClick={hireMeBtn} className="test-btn-blur-bg">
                      hire me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={containerRight}>
            <div className="test-con-right-con">
              <div className="test-con-right-con-imgcon animate__animated animate__backInUp">
                <img className="test-con-right-con-img" src={Rocket} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
