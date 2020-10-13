import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="project-header">
        <h2>Projects:</h2>
        <div className="project-container">
          <div className="cont">
            <a href="https://sinkinbeats.com/" target="_blank">
              <div className="sink sinkdown">
                <p>
                  <b>Sink In Beats</b>
                </p>
                <span>
                  Web App for making beats. Easy to use and very satisfying.
                </span>
                <br></br>
                <span>React.js</span>
                <span>Tone.js</span>
              </div>
            </a>
          </div>
          <div className="cont">
            <div className="sink sinkup">
              <p>
                <b>Music Blog</b>
              </p>
              <span>
                Listen to music and read about artists. Add new albums everyday.
              </span>
              <br></br>
              <span>React.js</span>
              <span>Contentful</span>
            </div>
          </div>
          <div className="cont">
            <div className="sink sinkleft"></div>
          </div>
          <div className="cont">
            <div className="sink sinkright"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
