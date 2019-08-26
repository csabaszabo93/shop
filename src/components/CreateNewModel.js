import {addShop} from "../actions/actions";
import React from "react"

let CreateNewModel = ({createModel}) => {
  let input;

  return(
      <div>
        <form className="add-option" onSubmit={(e) => {
          e.preventDefault();
          if(!input.value.trim()){
            return true;
          }
          createModel(input.value);
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

export default CreateNewModel