import React from "react";
import '../../styles/button.css';
import '../../styles/option.css';


const Product = ({product}) => {
  return (
      <div className="option">
        <p className="option__text">{product.name}</p>
      </div>
  );
};
export default Product;