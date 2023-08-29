import React from "react";

function AboutMe() {
  return (
    <div>
      AboutMe
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

export default AboutMe;
