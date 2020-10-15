import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects() {
  return (
    <div className="projects">
      <div className="project-header">
        <h2>Projects:</h2>
        <div className="project-container">
          <div className="cont">
            <p className="mobile-header"><b>Sink In Beats</b></p>
            <a href="https://sinkinbeats.com/" target="_blank">
              <div className="sink sone sinkup">
                <p>
                  <b>Sink In Beats</b>
                </p>
                <span>
                  Web App for making beats. Easy to use and very satisfying.
                </span>
                <br></br>
                <span>React</span>
                <span>Tone.js</span>
                <a href="https://github.com/JakubJureczko/drum-seq" target="_blank"><button className="cont-btn"></button></a>
              </div>
            </a>
            <div className="mobile-cont">
            
             <a href="https://sinkinbeats.com/" target="_blank"><button className="mobile-btn mobile-web"></button></a>
           
            <a href="https://github.com/JakubJureczko/drum-seq" target="_blank"><button className="mobile-btn mobile-git"></button></a>
            
            </div>
            
          </div>
          <div className="cont">
          <p className="mobile-header"><b>Music Blog</b></p>
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
                <a href="https://github.com/JakubJureczko/contentful-blog" target="_blank"><button className="cont-btn"></button></a>
              </div>
            </a>
            <div className="mobile-cont">
            <a href="https://jakubjureczko.github.io/contentful-blog/" target="_blank"><button className="mobile-btn mobile-web"></button></a>
           
           <a href="https://github.com/JakubJureczko/contentful-blog" target="_blank"><button className="mobile-btn mobile-git"></button></a>
            </div>
            
          </div>
          <div className="cont">
          <p className="mobile-header"><b>Cooking Heroes</b></p>
            <a
              href="https://jakubjureczko.github.io/cook-book/"
              target="_blank"
            >
              <div className="sink sthree sinkdown">
                <p>
                  <b>Cook Book</b>
                </p>
                <span>
                  Search for an amazing recipes for lunch, dinner and breakfast.
                </span>
                <br></br>
                <span>CSS</span>
                <span>JavaScript</span>
                <a href="https://github.com/JustinHorn/group-one-cookbook" target="_blank"><button className="cont-btn"></button></a>
              </div>
            </a>
            <div className="mobile-cont">
            <a href="https://jakubjureczko.github.io/cook-book/" target="_blank"><button className="mobile-btn mobile-web"></button></a>
           
           <a href="https://github.com/JustinHorn/group-one-cookbook" target="_blank"><button className="mobile-btn mobile-git"></button></a>
            </div>
          </div>
          <div className="cont">
          <p className="mobile-header"><b>Meme Machine</b></p>
            <a href="https://meme-generator-one.vercel.app/" target="_blank">
              <div className="sink sfour sinkdown">
                <p>
                  <b>Meme Machine</b>
                </p>
                <span>
                  Create your own memes. Upload your picture or choose one and
                  have fun.
                </span>
                <br></br>
                <span>React</span>
                <a href="https://github.com/JakubJureczko/meme-machine" target="_blank"><button className="cont-btn"></button></a>
              </div>
            </a>
            <div className="mobile-cont">
            <a href="https://meme-generator-one.vercel.app/" target="_blank"><button className="mobile-btn mobile-web"></button></a>
           
           <a href="https://github.com/JakubJureczko/meme-machine" target="_blank"><button className="mobile-btn mobile-git"></button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
