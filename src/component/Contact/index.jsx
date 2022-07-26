import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp, IoEarthSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Form from "react-bootstrap/Form";
import "./index.css";

function ContactComp() {
  return (
    <div style={{ width: "100%" }}>
      <div className="section-title padd-15">
        <h2>Contact</h2>
      </div>

      <div className="contact-content padd-15">
        <div className="content-box">
          <h4>You Have Any Questions ?</h4>
          <p>i'm at your service</p>
        </div>

        <div className="content-box">
          <div className="contact-item">
            <div className="content-box-25">
              <i className="icon-contact">
                <FaPhone />
              </i>
              <h4>Call Me On</h4>
              <p>+62 8666666666</p>
            </div>
            <div className="content-box-25">
              <i className="icon-contact">
                <IoLocationSharp />
              </i>
              <h4>City</h4>
              <p>Yogyakarta</p>
            </div>
            <div className="content-box-25">
              <i className="icon-contact">
                <MdEmail />
              </i>
              <h4>Email</h4>
              <p>fadelpopeye@gmail.com</p>
            </div>
            <div className="content-box-25">
              <i className="icon-contact">
                <IoEarthSharp />
              </i>
              <h4>Website</h4>
              <p>website.co</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "40px" }} className="content-box">
          <h4>SEND ME AN EMAIL</h4>
          <p>i'm very responsive to messages</p>
        </div>

        <div className="content-box">
          <Form className="contact-item">
            <div className="content-box-50">
              <div className="form-name">
                <Form.Control
                  style={{ height: 46 }}
                  type="name"
                  className="form-input"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="content-box-50">
              <div className="form-email">
                <Form.Control
                  style={{ height: 46 }}
                  type="email"
                  className="form-input"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="content-box">
              <div className="form-subject">
                <Form.Control
                  style={{ height: 46 }}
                  type="text"
                  className="form-input"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="content-box">
              <div className="form-subject">
                <Form.Control
                  as="textarea"
                  rows={5}
                  className="form-textarea"
                  placeholder="Message"
                />
              </div>
            </div>
            <button className="btn">Send Message</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactComp;
