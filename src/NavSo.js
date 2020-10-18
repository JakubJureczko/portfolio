import React from "react";
import "./NavSo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Navso() {
  return (
    <div className="social">
      <a href="https://github.com/JakubJureczko" target="_blank" rel="noopener noreferrer" > 
        <FontAwesomeIcon className="social-icons" icon={faGithub} size="2x"  /> 
        </a>
        <a href="https://www.linkedin.com/in/jakub-jureczko" target="_blank" rel="noopener noreferrer" > 
        <FontAwesomeIcon className="social-icons" icon={faLinkedinIn} size="2x"/> 
        </a>
        <a href="https://twitter.com/jakub_jureczko" target="_blank" rel="noopener noreferrer" > 
        <FontAwesomeIcon className="social-icons" icon={faTwitter} size="2x"/> 
        </a>
        <a href="mailto:untech.untech@gmail.com" target="_blank" rel="noopener noreferrer" > 
        <FontAwesomeIcon className="social-icons" icon={faEnvelope} size="2x"/> 
        </a>
         <Link to="/cv">
        <FontAwesomeIcon className="social-icons" icon={faFileAlt} size="2x"/> 
        </Link>
    </div>
  );
}

export default Navso;
