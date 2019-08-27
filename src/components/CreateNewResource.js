import React from "react"

let CreateNewResource = ({attributes, createModel}) => {
  let input = {};
  for (const attribute of attributes) {
    input[attribute] = React.createRef()
  }

  return(
      <div>
        <form className="add-option" onSubmit={(e) => {
          e.preventDefault();
          /*if(!input.value.trim()){
            return true;
          }*/
          const values = Object.assign({}, input);
          for(const attribute of attributes) {
            values[attribute] = values[attribute].value
          }
          createModel(values);
          for(const attribute of attributes) {
            input[attribute].value = ''
          }
        }}>
          {attributes.map(attribute => {
            return (
              <input
                  ref={node => input[attribute] = node}
                  className="add-option__input"
                  type="text"
                  placeholder={attribute} />
            )
          })}
          <button type="submit" className="button">Add Shop</button>
        </form>
      </div>
  )
};

export default CreateNewResource