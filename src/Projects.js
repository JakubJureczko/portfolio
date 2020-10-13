import React from 'react'
import "./Projects.css"
 function Projects() {
  

  return (
    <div className="projects">
      <div className="project-header">
      <h2>Projects:</h2>
      <div className="cont">
        <a href="https://sinkinbeats.com/" target="_blank">
        <div className="sink"> 
        <p><b>Sink In Beats</b></p>
        <span>Web App for making beats. Easy to use and very satisfying.</span>
        <br></br>
        <span>React.js</span> 
        <span>Tone.js</span> 
        </div>
        </a>
      </div>
      <div className="cont">
        <div className="sink">  
        </div>
      </div>
      <div className="cont">
        <div className="sink">  
        </div>
      </div>
      <div className="cont">
        <div className="sink">  
        </div>
      </div>
      </div>
      
    </div>
  )
}


export default Projects;