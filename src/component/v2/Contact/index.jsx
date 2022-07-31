import React from "react";
import Form from "react-bootstrap/Form";
import "./index.css";

export default function V2contact() {
  return (
    <div className="v2about-item">
      <div className="v2about-column">
        <div className="about-title">
          <h2>contact me</h2>
        </div>
        <div className="v2contact-box">
          <div className="v2contact-box-50">
            <div className="v2contact-form">
              <Form.Control
                style={{ height: 46 }}
                type="name"
                className="v2contact-form-input"
                placeholder="YOUR NAME"
              />
            </div>
            <div className="v2contact-form">
              <Form.Control
                style={{ height: 46 }}
                type="email"
                className="v2contact-form-input"
                placeholder="YOUR EMAIL"
              />
            </div>
            <div className="v2contact-form">
              <Form.Control
                as="textarea"
                rows={5}
                className="v2contact-form-input"
                placeholder="YOUR MESSAGE"
              />
            </div>
            <button className="btn-sne">get in touch</button>
          </div>
          <div className="v2contact-box-50">
            <div className="v2contact-text">
              <p className="my-service">
                You have any questions ? I'm at your service
              </p>
              <span>Straight shot to my inbox:</span>
              <p className="my-email">FADELPOPEYE@GMAIL.COM</p>
              <button>get in touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
