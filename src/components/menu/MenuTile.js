import React from 'react';

const MenuTile = ({option, selectionHandler}) => {
  return(
      <div className="menu-tile" onClick={(e) => {
        e.stopPropagation();
        selectionHandler(option.key)
      }}>
        {option.title}
      </div>
  )
};

export default MenuTile