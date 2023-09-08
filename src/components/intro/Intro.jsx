import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram , faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import "./Intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/code-typing.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Let's Build</h3>
          <h2>Hi There, I'm Sam Maina </h2>
          <h1> A <span>Software Engineer</span></h1>
          <h3>Based in Kenya</h3>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
             
            
          </div>
        </div>
        
        <a href="#portfolio">
          <img src="assets/down2.png" alt=""/>
        </a>
      </div>   
    </div>
  )
}
