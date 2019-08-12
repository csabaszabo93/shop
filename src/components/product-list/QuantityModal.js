import React from "react";
import '../../static/css/App.css';
import {connect} from "react-redux";
import {toggleQuantityModalVisibility} from "../actions/actions";

const mapStateToProps = state => {
  return {
    visible: state.UIState.quantityModalVisibility
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleVisibility: () => {
      dispatch(toggleQuantityModalVisibility())
    }
  }
};

let QuantityModal = ({visible, toggleVisibility}) => {
  if(visible) {
    return (
        <div id="modal">
          <div id="quantity-modal">
            <h2>How much?</h2>
            <form>
              <input type="number"/>
              <button type="button" onClick={event => {
                event.preventDefault();
                toggleVisibility();
              }}>Confirm</button>
            </form>
          </div>
        </div>
    );
  }
  return null;
};

QuantityModal = connect(mapStateToProps, mapDispatchToProps)(QuantityModal);

export default QuantityModal;