import React from "react";
import '../../static/css/App.css';


const ShoppingList = ({shoppingList}) => {
  return (
      <div className="option">
        <p className="option__text">{shoppingList.id}</p>
        <button
            className="button button--link"
        >
          remove
        </button>
      </div>
  );
};
export default ShoppingList;