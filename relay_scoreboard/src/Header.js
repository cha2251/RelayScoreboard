import { React, useState, useEffect } from "react";
import "./Header.css";
import relay_logo from "./assets/relay-logo.png";
import acs_logo from "./assets/acs-logo.jpg";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;
  console.log("Mobile: "+isMobile);

  if (isMobile) {
    return (
      <header>
        <nav>
        <div class="col">
              <h1 className="event-title" style={{margin:'2px'}}>Relay for Life</h1>
              <button class="button" style={{margin:'8px'}} onClick={() => {
                      window.location.href = "/";
                  }}> Fundraising </button>
              <button class="button" style={{margin:'8px'}}onClick={() => {
                      window.location.href = "/schedule";
                  }}> Schedule </button>
           </div>
        </nav>
      </header>
    );
  }else{
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
                  alt="ACS Logo" 
                  class="event-icon" />
          </div>
        </nav>
      </header>
    );
  }
};

export default Header;
