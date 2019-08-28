import React from "react";
import {authenticateUser, toggleLoginVisibility} from "../../actions/actions";
import {connect} from "react-redux";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";

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
            <form onSubmit={(e) => {
              e.preventDefault();
              /*if(!input.value.trim()){
                return true;
              }*/
              const values = Object.assign({}, input);
              values.username = input.username.value;
              values.password = input.password.value;
              login(values);
              input.username.value = "";
              input.password.value = "";
            }}>
              <div>
                <FontAwesomeIcon icon={faUser}/>
                <input
                    ref={node => input.username = node}
                    type="text"
                    placeholder="username" />
              </div>
              <div>
                <FontAwesomeIcon icon={faKey}/>
                <input
                    ref={node => input.password = node}
                    type="password"
                    placeholder="password" />
              </div>
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