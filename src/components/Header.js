import React from "react";
import '../static/css/App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faUser} from "@fortawesome/free-solid-svg-icons";
import {toggleMenuVisibility} from "./actions/actions";
import {connect} from "react-redux";

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
    loadUser: null
  }
};

let Header = ({title, username, openMenu, loadUser}) => {
    return (
        <div className="header" >
          <div onClick={(e) => {openMenu()}}>
            <FontAwesomeIcon icon={faBars}/>
          </div>
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

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;