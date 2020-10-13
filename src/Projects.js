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
              <div className="sink sone sinkdown">
                <p>
                  <b>Sink In Beats</b>
                </p>
                <span>
                  Web App for making beats. Easy to use and very satisfying.
                </span>
                <br></br>
                <span>React</span>
                <span>Tone.js</span>
              </div>
            </a>
          </div>
          <div className="cont">
            <a
              href="https://jakubjureczko.github.io/contentful-blog/"
              target="_blank"
            >
              <div className="sink stwo sinkup">
                <p>
                  <b>Music Blog</b>
                </p>
                <span>
                  Listen to music and read about artists. Add new albums
                  everyday.
                </span>
                <br></br>
                <span>React</span>
                <span>Contentful</span>
              </div>
            </a>
          </div>
          <div className="cont">
            <a
              href="https://jakubjureczko.github.io/cook-book/"
              target="_blank"
            >
              <div className="sink sthree sinkleft">
              <p>
                  <b>Cook Book</b>
                </p>
                <span>
                  Search for an amazing recipes for lunch, dinner and breakfast.
                </span>
                <br></br>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </a>
          </div>
          <div className="cont">
            <div className="sink sfour sinkright"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
