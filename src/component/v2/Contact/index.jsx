import React from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import "./index.css";

export default function V2contact() {
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

  return (
    <div className="v2about-item">
      <div className="v2about-column">
        <div className="about-title">
          <h2>contact me</h2>
        </div>
        <Form onSubmit={sendEmail}>
          <div className="v2contact-box">
            <div className="v2contact-box-50">
              <div className="v2contact-form">
                <Form.Control
                  style={{ height: 46 }}
                  type="name"
                  className="v2contact-form-input"
                  placeholder="YOUR NAME"
                  name="from_name"
                />
              </div>
              <div className="v2contact-form">
                <Form.Control
                  style={{ height: 46 }}
                  type="email"
                  className="v2contact-form-input"
                  placeholder="YOUR EMAIL"
                  name="form_email"
                />
              </div>
              <div className="v2contact-form">
                <Form.Control
                  as="textarea"
                  rows={5}
                  className="v2contact-form-input"
                  placeholder="YOUR MESSAGE"
                  name="message"
                />
              </div>
              <button type="submit" className="btn-sne">
                get in touch
              </button>
            </div>
            <div className="v2contact-box-50">
              <div className="v2contact-text">
                <p className="my-service">
                  I'm available to grab a coffee and chat! Drop a comment,
                  question, concern, or Spotify playlist, and thanks for
                  stopping by!
                </p>
                <span>Straight shot to my inbox:</span>
                <p className="my-email">FADELPOPEYE@GMAIL.COM</p>
                <button type="submit">get in touch</button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
