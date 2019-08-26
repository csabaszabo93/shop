import React from "react";
import '../../static/css/App.css';
import {connect} from "react-redux";
import {addLineItem, toggleQuantityFormVisibility} from "../../actions/actions";
import {LineItemModel} from "../../models/models";

const mapStateToProps = state => {
  return {
    visible: state.UIState.isQuantityFormVisible,
    productToLineItem: state.UIState.productToLineItem,
    product: state.products.filter(product => product.id === state.UIState.productToLineItem)[0],
    selectedShoppingList: state.selectedResources.shoppingList
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleVisibility: () => {
      dispatch(toggleQuantityFormVisibility())
    },
    saveNewLineItem: function (data) {
      data = Object.assign({}, LineItemModel, data);
      dispatch(addLineItem(data, this.selectedShoppingList))
    }
  }
};

const mergeProps =(state, dispatch, own) => {
  return {
    ...state,
    ...dispatch,
    ...own,
    saveNewLineItem(data) {
      const method = dispatch.saveNewLineItem.bind({selectedShoppingList: state.selectedShoppingList});
      console.log(method);
      method(data);
    }
  }
};

let QuantityForm = ({visible, productToLineItem, product, toggleVisibility, saveNewLineItem}) => {
  if(visible) {
    let quantity;
    return (
        <div id="quantity-modal">
          <form>
            Add
            <input ref={node => quantity = node} type="number" min="0"/>
            {product.packaging} of {product.name} to the list
            <button type="button" onClick={event => {
              event.preventDefault();
              saveNewLineItem(
                {
                  quantity: parseInt(quantity.value),
                  product: productToLineItem
                }
              );
              toggleVisibility();
            }}>Confirm</button>
          </form>
        </div>
    );
  }
  return null;
};

QuantityForm = connect(mapStateToProps, mapDispatchToProps, mergeProps)(QuantityForm);

export default QuantityForm;