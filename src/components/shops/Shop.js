import React from "react";
import '../../static/css/App.css';


const Shop = ({shop, deleteShop}) => {
    return (
        <div className="option">
            <p className="option__text">{shop.name}</p>
            <button
                className="button button--link"
                onClick={(e) => {
                    deleteShop(shop.id);
                }}
            >
                remove
            </button>
        </div>
    );
};
export default Shop;