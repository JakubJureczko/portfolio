import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>Skills:</h2>
      <div className="skill-container">
        <div className="card ">
          <span className="card-front"></span>
          <p>
            <b>Front-End</b>
          </p>
          <span>HTML5, CSS3, JavaScript</span>
          <span>React, Next.js, Styled Components</span>
        </div>
        <div className="card">
          <span className="card-back"></span>
          <p>
            <b>Back-End</b>
          </p>
          <span>Node.js, MySQL</span>
          <span>Express, MongoDB,  Mongoose </span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
