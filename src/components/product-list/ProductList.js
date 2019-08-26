import Product from "./Product";
import React from "react";
import '../../static/css/App.css';
import QuantityForm from "./QuantityForm";


const ProductList = ({products, isVisible, isQuantityFormVisible, toggleVisibility, toggleQuantityFormVisibility, convertToLineItem}) => {
  if (isVisible) {
    return (
        <div id="modal" onClick={toggleVisibility}>
          <div id="product-list" onClick={e => e.stopPropagation()}>
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
                    <Product key={index} product={product} isQuantityFormVisible={isQuantityFormVisible} convertToLineItem={convertToLineItem} toggleQuantityFormVisibility={toggleQuantityFormVisibility}/>
                ))
              }
            </product-pool>
            <QuantityForm/>
          </div>
        </div>
    );
  }
  return null;
};

export default ProductList;