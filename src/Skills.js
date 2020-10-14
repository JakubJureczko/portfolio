import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>Skills:</h2>
      <div className="skill-container">
        <div className="card">
          
          <p>
            <b>Front-End</b>
          </p>
          
          <span>HTML5, CSS3, JavaScript</span>
          <span>React, Next.js, Styled Components</span>
        
          
        </div>
        <div className="card">
          <p>
            <b>Back-End</b>
          </p>
          
          <span>Node.js, MySQL, Mongoose</span>
          <span>Express, MongoDB </span>
          
          
        </div>
      </div>
    </div>
  );
}

export default Skills;
