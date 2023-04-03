import React from "react";
import Button from "./Button";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer-cont">
      {/* <p className="para">Are you ready?</p> */}
      <h2>Are you ready?</h2>
      <Button className="btn1" name="Get Started Today!" />
      <ul>
        <li>About us</li>
        <li>Services</li>
        <li>Teams</li>
        <li>Projects</li>
      </ul>
      <p className="copyright">Copyright © 2023. All rights reserved.</p>
    </div>
  );
}
