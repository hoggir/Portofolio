import React from "react";
import Typewriter from "typewriter-effect";
import "./index.css";
import "./glitch.css";

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
        <div className="stack">
          <span className="index-0">full-stack</span>
          <span className="index-1">full-stack</span>
          <span className="index-2">full-stack</span>
        </div>
      </div>
      <div>
        <span>web developer</span>
      </div>
    </div>
  );
}
