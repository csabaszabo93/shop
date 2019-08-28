import React from "react";
import '../static/css/App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faUser} from "@fortawesome/free-solid-svg-icons";
import {toggleLoginVisibility, toggleMenuVisibility} from "../actions/actions";
import {connect} from "react-redux";
import Login from "./user/Login";

const mapStateToProps = state => {
  return {
    title: state.UIState.selectedMenuItem,
    username: null
  }
};

const mapDispatchToProps = dispatch => {
  return{
    openMenu: () => {
      dispatch(toggleMenuVisibility())
    },
    toggleLoginVisibility: () => {
      dispatch(toggleLoginVisibility())
    }
  }
};

let Header = ({title, username, openMenu, toggleLoginVisibility}) => {
    return (
        <div className="header" >
          <div onClick={(e) => {openMenu()}}>
            <FontAwesomeIcon icon={faBars}/>
          </div>
          <div>
            {title}
          </div>
          <div id="user-panel" onClick={toggleLoginVisibility}>
            <FontAwesomeIcon icon={faUser}/>
            {username}
          </div>
          <Login/>
        </div>
    );
};

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;