import Product from "./Product";
import React from "react";
import '../../static/css/App.css';
import QuantityForm from "./QuantityForm";
import SearchProduct from "../../containers/SearchProduct";


const ProductList = ({products, productFilter, isVisible, isQuantityFormVisible, toggleVisibility, toggleQuantityFormVisibility, convertToLineItem}) => {
  if (isVisible) {
    return (
        <div id="modal" onClick={toggleVisibility}>
          <div id="product-list" onClick={e => e.stopPropagation()}>
            <SearchProduct/>
            <product-pool>
              {products.length === 0 && <p className="widget__message">{productFilter + " is not in the product list yet"}</p>}
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