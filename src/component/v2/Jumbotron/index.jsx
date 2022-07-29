import React from "react";
import Typewriter from "typewriter-effect";
import "./index.css";

export default function V2jumbotron() {
  return (
    <div className="v2jumbotron-item">
      <div className="v2jumbotron-name">
        <span>
          <Typewriter
            options={{
              strings: ["fadel giras"],
              autoStart: true,
              loop: true,
              cursor: "",
            }}
          />
        </span>
      </div>
      <div>
        <span>full-stack</span>
      </div>
      <div>
        <span>web developer</span>
      </div>
    </div>
  );
}
