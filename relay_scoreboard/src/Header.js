import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import relay_logo from "../assets/relay-logo.png";
import acs_logo from "../assets/acs-logo.jpg";

const Header = () => {
  return (
    <header>
      <nav>
      <div class="row">
            <img src={relay_logo}
                alt="Relay for Life Logo" 
                class="event-icon" />
            <button class="button" onClick={() => {
                    window.location.href = "/";
                }}> Fundraising </button>
            <h1 className="event-title">RIT Relay for Life</h1>
            <button class="button" onClick={() => {
                    window.location.href = "/schedule";
                }}> Schedule </button>
            <img src={acs_logo}
                alt="Relay for Life Logo" 
                class="event-icon" />
         </div>
      </nav>
    </header>
  );
};

export default Header;
