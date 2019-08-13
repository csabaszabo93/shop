import React from "react";
import '../../static/css/button.css';
import '../../static/css/option.css';


const LineItem = ({lineItem, product, deleteLineItem}) => {
    return (
        <div className="option">
            <p className="option__text">{lineItem.quantity} {product.packaging} {product.name}</p>
            <button
                className="button button--link"
                onClick={(e) => {
                    deleteLineItem(lineItem.id);
                }}
            >
                remove
            </button>
        </div>
    );
};
export default LineItem;