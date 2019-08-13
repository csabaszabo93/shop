import Shop from "./Shop";
import React from "react";
import '../../static/css/App.css';


const ShopList = ({shops, deleteShop, clearList}) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your shops:</h3>
                <button
                    className="button button--link"
                    style={{color: '#F2F0CC'}}
                    onClick={() => clearList()}
                >Remove All
                </button>
            </div>
            {shops.length === 0 && <p className="widget__message">Please add some shop to get started!</p>}
            {
                shops.map((shop, index) => (
                    <Shop
                        key={index}
                        shop={shop}
                        deleteShop={deleteShop}
                    />
                ))
            }
        </div>
    );
};

export default ShopList;