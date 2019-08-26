import React from "react";
import '../../static/css/App.css';


const ShoppingList = ({shoppingList, loadLineItems, saveSelected, remove}) => {
  return (
      <div className="option">
        <p onClick={() => {
          loadLineItems(shoppingList.lineItems);
          saveSelected(shoppingList.id);
        }}
           className="option__text">
          {shoppingList.id}
        </p>
        <button
            className="button button--link"
            onClick={() => remove(shoppingList.id)}
        >
          remove
        </button>
      </div>
  );
};
export default ShoppingList;