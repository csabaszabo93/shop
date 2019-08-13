import React from 'react';

const MenuTile = ({title, selectionHandler, highlight}) => {
  return(
      <div className="menu-tile" onClick={(e) => {
        e.preventDefault();
        selectionHandler(title)
      }}>
        {title}
      </div>
  )
};

export default MenuTile