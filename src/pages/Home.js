import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Andy Li (Alaric)</h2>
        <div className="prompt">
          <p>Business & CS @ UBC</p>
          <p>Prev: SAP</p>
          <a
            href="https://www.gmail.com"
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
      <div className="skills">
        <h1>Technical Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Programming Languages</h2>
            <span>Python, Java, SQL, JavaScript, C++, Swift</span>
          </li>
          <li className="item">
            <h2>Frameworks & Libraries</h2>
            <span>
              ReactJS, MongoDB, Node.js, Selenium, NumPy, Pandas, JUnit, Swing
            </span>
          </li>
          <li className="item">
            <h2>Developer Tools</h2>
            <span>
              Git, Docker, Maven, OAuth, SAP SAC, SAP HANA, JIRA, Databricks,
              Postman, Citrix, AWS (EC2)
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
