import React from "react";
import Container from "react-bootstrap/Container";
import "./index.css";

export default function TestPage() {
  return (
    <div>
      <Container>
        <div className="test-con">
          <div className="test-con-left">
            <div className="test-con-left-con">
              <div className="test-con-left-con-100">
                <div className="test-con-left-con-col">COL</div>
                <div className="test-con-left-con-col">COL</div>
              </div>
            </div>
          </div>
          <div className="test-con-right">
            <h1>RIGHT</h1>
          </div>
        </div>
      </Container>
    </div>
  );
}
