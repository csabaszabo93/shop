import Product from "./Product";
import React from "react";
import '../../static/css/App.css';


const ProductList = ({products, toggleQuantityModalVisibility, convertToLineItem}) => {
  return (
      <div id="product-list">
        <div className="widget-header">
          <h3 className="widget-header__title">Products</h3>
          <button
              className="button button--link"
              style={{color: '#F2F0CC'}}
          >Remove All
          </button>
        </div>
        <product-pool>
          {products.length === 0 && <p className="widget__message">Please add some shoppin' to get started!</p>}
          {
            products.map((product, index) => (
                <Product key={index} product={product} toggleQuantityModalVisibility={toggleQuantityModalVisibility} convertToLineItem={convertToLineItem}/>
            ))
          }
        </product-pool>
      </div>
  );
};

export default ProductList;