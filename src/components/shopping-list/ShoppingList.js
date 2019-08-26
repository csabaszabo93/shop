import React from "react";
import '../../static/css/App.css';


const ShoppingList = ({shoppingList, loadLineItems, saveSelected}) => {
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
        >
          remove
        </button>
      </div>
  );
};
export default ShoppingList;