import React from "react";
import "./nav.css";
import logo from '../../assets/logo.png'
import playStore from '../../assets/playStore.png'
import appStore from '../../assets/appStore.png'
import { useState } from "react";

const Nav = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <div className="navv-bar">
       <a href="#Home"> <div class="logos">
        <img src={logo} className=""/> 
        </div>
        </a>

        <div class="navigations">
          <input type="checkbox" class="toggle-menus" />
          <div class="hamburgers"></div>
          <ul class="menus">
            <li>
              {" "}
              <a href="#Feature">Feature</a>
            </li>
            <li>
              {" "}
              <a href="#Testimonial">Testimonial</a>
            </li>{" "}
            <li>
              {" "}             
              <a href="#About">About</a>
            </li>{" "}
            <li>
            <a href=""><img src={playStore} className="nav-appstore"/></a>
            </li>
            <li>
            <a href=""><img src={appStore} /></a>
            </li>
          </ul>
          {/* <div className='about-app'>
              <img src={playStore} className="appstore"/>
             <img src={appStore} />
            </div> */}
        </div>
      
      </div>
     
    
    </div>
  );
};

export default Nav;
