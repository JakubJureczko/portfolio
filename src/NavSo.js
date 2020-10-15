import React from "react";
import "./NavSo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'

function Navso() {
  return (
    <div className="social">
      <a href="https://github.com/JakubJureczko" target="_blank"> 
        <FontAwesomeIcon className="social-icons" icon={faGithub} size="2x" style={{color:"rgba(81, 85, 107, 0.5)"}} /> 
        </a>
        <a href="https://www.linkedin.com/in/jakub-jureczko" target="_blank"> 
        <FontAwesomeIcon className="social-icons" icon={faLinkedinIn} size="2x" style={{color:"rgb(205, 165, 243)"}} /> 
        </a>
        <a href="https://twitter.com/jakub_jureczko" target="_blank"> 
        <FontAwesomeIcon className="social-icons" icon={faTwitter} size="2x" style={{color:"rgba(187, 135, 235, 0.8)"}} /> 
        </a>
        <a href="https://twitter.com/jakub_jureczko" target="_blank"> 
        <FontAwesomeIcon className="social-icons" icon={faEnvelope} size="2x" style={{color:"rgba(244, 4, 156,0.5)"}} /> 
        </a>
        <a href="https://twitter.com/jakub_jureczko" target="_blank"> 
        <FontAwesomeIcon className="social-icons" icon={faFileAlt} size="2x" style={{color:"rgba(81, 85, 107, 0.5)"}} /> 
        </a>
    </div>
  );
}

export default Navso;
