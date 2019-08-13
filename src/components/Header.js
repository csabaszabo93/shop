import React from "react";
import '../static/css/App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faUser} from "@fortawesome/free-solid-svg-icons";

const Header = ({title, username, openMenu, loadUser}) => {
    return (
        <div className="header" >
            <FontAwesomeIcon icon={faBars}/>
            <div>
              {title}
            </div>
            <div id="user-panel">
              <FontAwesomeIcon icon={faUser}/>
              {username}
            </div>
        </div>
    );
};

export default Header;