import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2 className="skills-normal">Skills:</h2>
      <h2 className="skills-mobile">Skills</h2>
      <div className="skill-container">
        <div className="card ">
          <span className="card-front"></span>
          <p>
            <b>Front-End</b>
          </p>
          <span>HTML5, CSS3, JavaScript</span>
          <span>React, Next.js, TypeScript</span>
          <span>Styled Components, Sass</span>
        </div>
        <div className="card">
          <span className="card-back"></span>
          <p>
            <b>Back-End</b>
          </p>
          <span>Node.js, MySQL, Express</span>
          <span>MongoDB, GraphQL, Mongoose </span>
          <span>Contentful</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
