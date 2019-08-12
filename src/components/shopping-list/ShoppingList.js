import LineItem from "./LineItem";
import React from "react";
import '../../styles/widget.css';


const ShoppingList = ({lineItems, deleteLineItem, clearList}) => {
    return (
        <div id="shopping-list">
          <div className="widget-header">
                <h3 className="widget-header__title">Your shop items:</h3>
                <button
                    className="button button--link"
                    style={{color: '#F2F0CC'}}
                    onClick={(e) => {
                      clearList();
                    }}
                >Remove All
                </button>
            </div>
            {lineItems.length === 0 && <p className="widget__message">Please add some shoppin' to get started!</p>}
            {
                lineItems.map((lineItem, index) => (
                    <LineItem key={index} lineItem={lineItem} deleteLineItem={deleteLineItem}/>
                ))
            }
        </div>
    );
};

export default ShoppingList;