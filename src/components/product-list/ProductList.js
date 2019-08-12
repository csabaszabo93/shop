import Product from "./Product";
import React from "react";
import '../../styles/widget.css';


const ProductList = ({products}) => {
  return (
      <div id="product-list">
        <div className="widget-header">
          <h3 className="widget-header__title">Your shop items:</h3>
          <button
              className="button button--link"
              style={{color: '#F2F0CC'}}
          >Remove All
          </button>
        </div>
        {products.length === 0 && <p className="widget__message">Please add some shoppin' to get started!</p>}
        {
          products.map((product, index) => (
              <Product key={index} product={product}/>
          ))
        }
      </div>
  );
};

export default ProductList;