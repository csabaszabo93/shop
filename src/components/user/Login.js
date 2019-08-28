import React from "react";
import {authenticateUser, toggleLoginVisibility} from "../../actions/actions";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    isVisible: state.UIState.isLoginVisible
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: credentials => {
      dispatch(authenticateUser(credentials))
    },
    toggleVisibility: () => {
      dispatch(toggleLoginVisibility())
    }
  }
};

let Login = ({isVisible, login, toggleVisibility}) => {
  if(isVisible) {
    let input = {
      username: React.createRef(),
      password: React.createRef()
    };
    return(
        <div id="modal" onClick={toggleVisibility}>
          <div id="login" onClick={e => e.stopPropagation()}>
            <form className="add-option" onSubmit={(e) => {
              e.preventDefault();
              /*if(!input.value.trim()){
                return true;
              }*/
              const values = Object.assign({}, input);
              values.username = input.username.value;
              values.password = input.password.value;
              login(values);/*
              input.username.value = "";
              input.password.value = "";*/
            }}>
              <input
                  ref={node => input.username = node}
                  className="add-option__input"
                  type="text"
                  placeholder="username" />
              <input
                  ref={node => input.password = node}
                  className="add-option__input"
                  type="text"
                  placeholder="password" />
              <button type="submit" className="button">Login</button>
            </form>
          </div>
        </div>
    )
  }
  return null;
};

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login