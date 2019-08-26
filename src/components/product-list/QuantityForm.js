import React from "react";
import '../../static/css/App.css';
import {connect} from "react-redux";
import {addLineItem, toggleQuantityFormVisibility, updateLineItem} from "../../actions/actions";
import {LineItemModel} from "../../models/models";

const mapStateToProps = state => {
  const selectedShoppingList = state.shoppingLists
      .filter(shoppingList => shoppingList.id === state.selectedResources.shoppingList)[0];
  const products = state.lineItems
      .filter(lineItem => selectedShoppingList.lineItems.includes(lineItem.id))
      .map(lineItem => lineItem.product);
  return {
    visible: state.UIState.isQuantityFormVisible,
    productToLineItem: state.UIState.productToLineItem,
    product: state.products.filter(product => product.id === state.UIState.productToLineItem)[0],
    selectedShoppingList: selectedShoppingList,
    products: products
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
    },
    updateLineItem: function (data) {
      dispatch(updateLineItem(data))
    }
  }
};

const mergeProps =(state, dispatch, own) => {
  return {
    ...state,
    ...dispatch,
    ...own,
    addLineItem(data) {
      let method;
      if(state.products.includes(data.product)){
        method = dispatch.updateLineItem
      }else {
        method = dispatch.saveNewLineItem.bind({selectedShoppingList: state.selectedShoppingList.id});
      }
      method(data)
    }
  }
};

let QuantityForm = ({visible, productToLineItem, product, toggleVisibility, addLineItem}) => {
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
              addLineItem(
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