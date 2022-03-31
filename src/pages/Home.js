import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/link2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        
      </div>
    </div>
  );
}

export default Home;
