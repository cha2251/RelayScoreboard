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
            <Link to="/">Fundraising</Link>
            <h1 className="event-title">RIT Relay for Life</h1>
            <Link to="/schedule">Schedule</Link>
            <img src={acs_logo}
                alt="Relay for Life Logo" 
                class="event-icon" />
         </div>
      </nav>
    </header>
  );
};

export default Header;
