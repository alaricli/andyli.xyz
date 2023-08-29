import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import pic from "/Users/andyli/Projects/andyli.xyz/src/assets/IMG_5936.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="picture">
          <img src={pic} alt="Pic" />
        </div>
        <h2>Andy Li (Alaric)</h2>
        <div className="prompt">
          <p>Business & CS @ UBC</p>
          <p>Prev: SAP</p>
          <a
            href="mailto:youremail@example.com?subject=Hello%20Andy&body=Hello%20Andy,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/andyli99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/andyli5167"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.instagram.com/andyli51"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
