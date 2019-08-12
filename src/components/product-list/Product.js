import React from "react";
import '../../static/css/App.css';


const Product = ({product, toggleQuantityModalVisibility}) => {
  return (
      <div className="product-tile" onClick={event => {
        event.preventDefault();
        toggleQuantityModalVisibility();
      }}>
        <img src={product.pictureUrl} alt=""/>
        <p>{product.name}</p>
      </div>
  );
};
export default Product;