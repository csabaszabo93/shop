import LineItem from "./LineItem";
import React from "react";
import '../../static/css/App.css';
import ProductPool from "../../containers/ProductPool";


const LineItems = ({lineItems, products, remove, clear, showProductPool}) => {
    return (
        <div id="shopping-list">
          <div className="widget-header">
                <h3 className="widget-header__title">Your shop items:</h3>
                <button
                    className="button button--link"
                    style={{color: '#F2F0CC'}}
                    onClick={() => clear(lineItems.map(lineItem => lineItem.id))}
                >Remove All
                </button>
            </div>
            {lineItems.length === 0 && <p className="widget__message">Please add some shoppin' to get started!</p>}
            {
                lineItems.map((lineItem, index) => (
                    <LineItem key={index} lineItem={lineItem} remove={remove} product={products.filter(product => product.id === lineItem.product)[0]}/>
                ))
            }
            <button onClick={showProductPool}>
              Add product to list
            </button>
          <ProductPool/>
        </div>
    );
};

export default LineItems;