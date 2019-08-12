import React from "react";
import '../../styles/button.css';
import '../../styles/option.css';


const LineItem = ({lineItem, deleteLineItem}) => {
    return (
        <div className="option">
            <p className="option__text">{lineItem.id}</p>
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