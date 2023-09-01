import React from "react";

import "/Users/andyli/Projects/andyli.xyz/src/styles/AboutMe.css";

function AboutMe() {
  return (
    <div>
      <div className="about">
        <h1 className="aboutme-title">About Me</h1>
        <p className="aboutme">
          My name is Andy Li. I am a final year business & computer science
          student at UBC. I have previously interned as a software developer at
          SAP working on databases. In my spare time I enjoy tinkering with
          cars, playing card games, and developing various passion projects. To
          learn more about my skills and experiences, please take a look at my{" "}
          <a
            className="resumeLink"
            href="https://drive.google.com/file/d/1JiSXdsosY6YDDvIFjEWdbxa0FGPa2_ZA/view?usp=sharing"
          >
            resume
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
