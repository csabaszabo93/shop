import React from "react";
import '../../static/css/button.css';
import '../../static/css/option.css';


const Product = ({product}) => {
  return (
      <div className="option">
        <p className="option__text">{product.name}</p>
      </div>
  );
};
export default Product;