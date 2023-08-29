import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { GitHub } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia"></div>
      <p> &copy; 2023 andyli.xyz</p>
    </div>
  );
}

export default Footer;
