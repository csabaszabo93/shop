import React from "react";
import '../../static/css/App.css';
import {connect} from "react-redux";
import {addLineItem, toggleQuantityModalVisibility} from "../actions/actions";

const mapStateToProps = state => {
  return {
    visible: state.UIState.quantityModalVisibility,
    productToLineItem: state.UIState.productToLineItem
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleVisibility: () => {
      dispatch(toggleQuantityModalVisibility())
    },
    saveNewLineItem: (shoppingListId, quantity, productId) => {
      /*dispatch(saveLineItem(quantity, productId));
      dispatch(addLineItem(shoppingListId, lineItemId))*/
    }
  }
};

let QuantityModal = ({visible, productToLineItem, toggleVisibility, saveNewLineItem}) => {
  if(visible) {
    let quantity;
    return (
        <div id="modal">
          <div id="quantity-modal">
            <h2>How much?</h2>
            <form>
              <input ref={node => quantity = node} type="number"/>
              <button type="button" onClick={event => {
                event.preventDefault();
                saveNewLineItem(parseInt(quantity.value), productToLineItem);
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