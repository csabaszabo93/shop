import React from "react";
import '../../static/css/App.css';


const Product = ({product, isQuantityFormVisible, toggleQuantityFormVisibility, convertToLineItem}) => {
  return (
      <div className="product-tile" onClick={event => {
        event.preventDefault();
        convertToLineItem(product.id);
        if(!isQuantityFormVisible){
          toggleQuantityFormVisibility();
        }
      }}>
        <img src={product.pictureUrl} alt=""/>
        <p>{product.name}</p>
      </div>
  );
};
export default Product;