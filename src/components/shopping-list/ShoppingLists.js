import ShoppingList from "../shopping-list/ShoppingList"
import React from "react";
import '../../static/css/App.css';


const ShoppingLists = ({shoppingLists, loadLineItems}) => {
  return (
      <div id="shopping-list">
        <div className="widget-header">
          <h3 className="widget-header__title">Your shop items:</h3>
          <button
              className="button button--link"
              style={{color: '#F2F0CC'}}
          >Remove All
          </button>
        </div>
        {shoppingLists.length === 0 && <p className="widget__message">Please add some shoppin' to get started!</p>}
        {
          shoppingLists.map((shoppingList, index) => (
              <ShoppingList key={index} shoppingList={shoppingList} loadLineItems={loadLineItems}/>
          ))
        }
      </div>
  );
};

export default ShoppingLists;