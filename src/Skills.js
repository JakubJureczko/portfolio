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
          <p>Languages:</p>
          <span>HTML, CSS, JavaScript</span>
          <span>React, Next.js</span>
          <p className="para">Tools:</p>
          <span>GIMP, Figma, GitHub, Netlify, Vercel</span>
        </div>
        <div className="card">
          <p>
            <b>Back-End</b>
          </p>
          <p>Languages:</p>
          <span>Node.js, SQL</span>
          <p className="para2">Tools:</p>
          <span>Express, MongoDB, Heroku</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
