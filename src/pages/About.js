import React from "react";
import MultiplePizzas from "../assets/about.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          wecare is an orphanage website where you can donate and become a 
          volunteer.so we want you also to become part of our journey.
        </p>
      </div>
    </div>
  );
}

export default About;
