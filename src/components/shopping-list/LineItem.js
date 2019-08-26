import React from "react";
import '../../static/css/App.css';


const LineItem = ({lineItem, product, remove}) => {
    return (
        <div className="option">
            <p className="option__text">{lineItem.quantity} {product.packaging} {product.name}</p>
            <button
                className="button button--link"
                onClick={(e) => {
                    remove(lineItem.id);
                }}
            >
                remove
            </button>
        </div>
    );
};
export default LineItem;