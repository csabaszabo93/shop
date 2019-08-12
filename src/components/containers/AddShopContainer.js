import React from "react";
import '../../static/css/button.css';
import '../../static/css/add-option.css';
import {addShop} from "../actions/actions";
import {connect} from "react-redux";


let AddShop = ({dispatch}) => {
    let input;

    return(
        <div>
            <form className="add-option" onSubmit={(e) => {
                e.preventDefault();
                if(!input.value.trim()){
                    return true;
                }
                dispatch(addShop(input.value));
                input.value = '';
            }}>
                <input
                    ref={node => input = node}
                    className="add-option__input"
                    type="text" name="option"
                    placeholder="please shops here..." />
                <button type="submit" className="button">Add Shop</button>
            </form>
        </div>
    )
};

const AddShopContainer = connect()(AddShop);

export default AddShopContainer;