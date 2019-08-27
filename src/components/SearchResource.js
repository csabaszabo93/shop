import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

let SearchResource = ({isVisible, target, filter, toggleVisibility, removeFilter}) => {
  if(isVisible) {
    let input;
    return(
        <div className="widget-header">
          <form onSubmit={(e) => {
            e.preventDefault();
            if(!input.value.trim()){
              return true;
            }
            filter(input.value);
            toggleVisibility();
            input.value = '';
          }}>
            <input
                ref={node => input = node}
                type="text"
                placeholder={target + "'s name"} />
            <button type="submit">Search</button>
          </form>
        </div>
    )
  }
  return (
      <div className="widget-header">
        <h3 className="title">
          {target}
          <div onClick={toggleVisibility}>
            <FontAwesomeIcon icon={faSearch}/>
          </div>
        </h3>
        <div onClick={removeFilter}>
            Remove filter
        </div>
      </div>
  )
};

export default SearchResource