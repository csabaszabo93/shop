import ShoppingList from "../shopping-list/ShoppingList"
import React from "react";
import '../../static/css/App.css';
import AddShoppingList from "../../containers/AddShoppingList";


const ShoppingLists = ({shoppingLists, loadLineItems, saveSelected, clear, remove}) => {
  return (
      <div id="shopping-list">
        <div className="widget-header">
          <h3 className="widget-header__title">Your shop items:</h3>
          <button
              className="button button--link"
              style={{color: '#F2F0CC'}}
              onClick={clear}
          >Remove All
          </button>
        </div>
        {shoppingLists.length === 0 && <p className="widget__message">Please add some shoppin' to get started!</p>}
        {
          shoppingLists.map((shoppingList, index) => (
              <ShoppingList key={index} shoppingList={shoppingList} loadLineItems={loadLineItems} saveSelected={saveSelected} remove={remove}/>
          ))
        }
        <AddShoppingList/>
      </div>
  );
};

export default ShoppingLists;